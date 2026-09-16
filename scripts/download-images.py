#!/usr/bin/env python3
"""Download original K-roy Electricity images into public/images."""

from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.request import Request, urlopen

BASE = "https://03a244d3a1.clvaw-cdnwnd.com/9bd29e2c72a88e36018921042c01e3fb"
ROOT = Path(__file__).resolve().parents[1] / "public" / "images"

FILES = {
    "logo-white.png": "200000032-0563f05640/Log%C3%B3%20feh%C3%A9r.png",
    "hero-electrician.jpg": "200000262-ac8fdac8ff/ai-generated-8810296_1280.jpeg",
    "portrait-karoly.jpg": "200000299-1aa181aa1a/IMG_1603.jpeg",
    "portfolio-karbantartas.jpg": "200000278-dfe3adfe3d/IMG_0848.jpeg",
    "portfolio-automata.jpg": "200000018-06efb06efc/DA17FD4A-0324-4773-B03E-5F7E5432B8FB.jpeg",
    "portfolio-vbf.jpg": "200000301-0a8270a828/IMG_1604.jpeg",
    "portfolio-led.jpg": "200000252-7106e71071/415023089_820046870132095_6451448254765970839_n%20%281%29.jpeg",
    "vbf-1.jpg": "200000293-d18c1d18c3/B0C3E520-E9AA-4BF1-A192-0BA9E064E7BD.jpeg",
    "vbf-2.jpg": "200000272-87f7087f72/1.jpeg",
    "vbf-3.jpg": "200000294-dd4a7dd4a9/E31926A4-6F75-4342-B1CD-54E250795B55.jpeg",
    "epulet-fo-eloszto.jpg": "200000132-1992119922/86D7EB88-E8BC-4474-9F1B-BBCF3D695C88.jpeg",
    "gallery/g01.jpg": "200000033-906f5906f7/625EE87A-9B7E-4F8D-86DE-394D6B13A3CE.jpeg",
    "gallery/g02.jpg": "200000034-d1a59d1a5a/76495DD7-FF8B-4067-92D7-8CA20CEE34BA.jpeg",
    "gallery/g03.jpg": "200000049-064d5064d7/FD882933-DE1F-4C72-8204-90EC859A63FD.jpeg",
    "gallery/g04.jpg": "200000050-be4babe4bb/81903014-8443-4218-95D1-21D1497CF905.jpeg",
    "gallery/g05.jpg": "200000051-18ed118ed2/58B0F38B-292A-4E0A-BF21-931154F0C356.jpeg",
    "gallery/g06.jpg": "200000052-0a7dc0a7dd/1DC22950-161B-41F1-AF2C-489700C85A3D.jpeg",
    "gallery/g07.jpg": "200000053-c8645c8646/96C30C49-81EE-418F-AC29-A1560D4AD698.jpeg",
    "gallery/g08.jpg": "200000054-ef6bbef6bc/673BAE21-E449-4584-836D-285835F4E95B.jpeg",
    "gallery/g09.jpg": "200000055-b56d6b56d8/82786BE0-E75F-463D-9ABC-543E92575201.jpeg",
    "gallery/g10.jpg": "200000056-edda2edda3/FE9B77C2-CF02-4DE2-B49E-90B3D536629E.jpeg",
    "gallery/g11.jpg": "200000057-f1421f1423/A3CC298A-C08F-4BFA-9AA0-D85911724DFB.jpeg",
    "gallery/g12.jpg": "200000058-2de892de8a/65300D26-8BD7-426D-823C-71F9CCAF7A90.jpeg",
    "gallery/g13.jpg": "200000061-25e2925e2a/E702B36B-43B1-438E-BEA1-2D9F48BD7DD8.jpeg",
    "gallery/g14.jpg": "200000063-c45e5c45e6/E76EA7CD-904B-4027-8528-05BEA99B607C.jpeg",
    "gallery/g15.jpg": "200000064-a0c82a0c83/08099EAB-1994-48F9-8C5D-BCEEDE232AA1.jpeg",
    "gallery/g16.jpg": "200000066-446a3446a4/8B8481A8-56EB-454C-BFBA-6C599B31BAED.jpeg",
    "gallery/g17.jpg": "200000070-3b81a3b81b/75555243-06EC-405D-A738-B5CEFB14125C.jpeg",
    "gallery/g18.jpg": "200000065-60fdf60fe0/9482B026-06CD-44F3-8A56-809AFDC54D69.jpeg",
    "gallery/g19.jpg": "200000071-1f3601f361/22AEFFD0-BFC3-418C-9B06-8525880C9FC2.jpeg",
    "gallery/g20.jpg": "200000072-284ed284ee/C28F3013-DB3A-4247-BC51-748F052FA2F7.jpeg",
    "gallery/g21.jpg": "200000073-c96dfc96e0/9B670AE5-822A-479A-930D-D91233387101.jpeg",
    "gallery/g22.jpg": "200000074-0071a0071b/CF943A06-558A-47EB-A484-5D9498824FF9.jpeg",
    "gallery/g23.jpg": "200000076-6c3296c32a/FC8494B7-CEA0-4CE4-BEEA-89506FFEC3C6.jpeg",
    "gallery/g24.jpg": "200000077-8040f80410/C1D4E560-DDEB-47C5-AB5B-C51636AF5EB0.jpeg",
    "gallery/g25.jpg": "200000078-0bc120bc13/CA524D42-75A8-48CE-8147-295A184AD8FB.jpeg",
    "gallery/g26.jpg": "200000170-7b0e67b0e8/DD3D2115-517E-47F8-AFD6-26379E380AAB.jpeg",
    "gallery/g27.jpg": "200000172-a16e2a16e3/4C60ED0C-557B-4190-AE13-859876A05609.jpeg",
    "gallery/g28.jpg": "200000174-9f3899f38a/0BD02BCB-18F7-4895-9DCB-0864497F08C1.jpeg",
    "gallery/g29.jpg": "200000176-b8843b8844/432CDA1C-BA6E-4AE1-A4EA-0AAC33606779.jpeg",
    "gallery/g30.jpg": "200000178-b56acb56ad/35E5FDD1-762D-414D-B220-99416BFC2F36.jpeg",
    "gallery/g31.jpg": "200000180-825cb825cc/E36D2E91-B997-426F-8ACD-472782C9A751.jpeg",
    "gallery/g32.jpg": "200000182-d6f62d6f63/5333EDFE-B272-41B7-B5EA-D82FC2B017ED.jpeg",
    "gallery/g33.jpg": "200000184-0670606707/7F73490E-9BA7-48EB-9640-D5B2C57EA4AD.jpeg",
    "gallery/g34.jpg": "200000186-85e7285e73/6A5361CB-CD48-426A-ACA0-DD342D80AE3F.jpeg",
    "gallery/g35.jpg": "200000188-9d7b29d7b3/06E2B4C8-45AF-4B73-8C27-1325CFFC76D6.jpeg",
    "gallery/g36.jpg": "200000190-5013350135/6E63BCC7-1F1C-4FDE-A034-8AD771E345B5.jpeg",
    "gallery/g37.jpg": "200000192-472bc472be/1F317F11-4C2A-45A1-B3E2-E270C6F2ADA5.jpeg",
    "gallery/g38.jpg": "200000194-ec6f9ec6fa/5E873F09-5382-4FE9-AF5F-7A6691BF9ADE.jpeg",
    "gallery/g39.jpg": "200000196-01e2001e22/209E0559-C9D3-4A54-8C14-D9FB74911B60.jpeg",
    "gallery/g40.jpg": "200000198-d65d3d65d4/D4B0394D-D010-49DD-B32D-DAB947216987.jpeg",
    "gallery/g41.jpg": "200000166-2132721328/4090C3EE-35E6-4D77-9E6E-2F01A1FA1180.jpeg",
    "gallery/g42.jpg": "200000200-32d6132d63/927F3FFA-C961-44FD-B1ED-7A04831B5266.jpeg",
    "gallery/g43.jpg": "200000168-509095090a/E6B67528-E5E7-42DD-AADB-2BEBD36B7C61.jpeg",
    "gallery/g44.jpg": "200000202-ca821ca823/4A551CB9-F307-43E1-B9B4-E921B79A6704.jpeg",
    "gallery/g45.jpg": "200000204-d8285d8287/97162D33-3685-4CE3-B551-8DB0035521C6.jpeg",
    "gallery/g46.jpg": "200000206-d5aadd5aae/3F3980D8-E2D2-4AA2-9F1D-7B824479CABF.jpeg",
    "gallery/g47.jpg": "200000208-d1b83d1b84/42094C02-D332-435D-84C2-D13444116E8E.jpeg",
    "gallery/g48.jpg": "200000210-b1a66b1a68/32ED13B6-4DD4-486E-A881-A16499986780.jpeg",
    "gallery/g49.jpg": "200000212-1ab801ab81/F8317D11-60C5-4E31-A67E-89237EF5F850.jpeg",
    "gallery/g50.jpg": "200000214-be624be626/D3D49DE7-0603-4A4F-AB1E-EEE1ABD79DDC.jpeg",
    "gallery/g51.jpg": "200000216-d2cfbd2cfd/4B4F8CE2-469D-4F55-9D00-E2FA335AC842.jpeg",
    "gallery/g52.jpg": "200000218-f0616f0618/F8FAD404-6A49-4DF2-9440-AE9A1BFEC07D.jpeg",
    "gallery/g53.jpg": "200000220-0e4e10e4e2/B415A501-7ADD-44D7-AA88-55F0E2632B93.jpeg",
    "gallery/g54.jpg": "200000236-ac05cac05e/IMG_7804.jpeg",
    "gallery/g55.jpg": "200000238-96d6d96d6f/IMG_7800.jpeg",
    "gallery/g56.jpg": "200000239-3eab33eab4/431AB7C4-A0FE-45F6-A4E9-04A9E672121B.jpeg",
    "gallery/g57.jpg": "200000240-0838508386/5CEEFE51-7EF5-4E14-A1C2-B66F0B2B028C.jpeg",
    "gallery/g58.jpg": "200000244-336f9336fc/4A811DEB-2138-4DB1-9B84-C3772510AF2C.jpeg",
    "gallery/g59.jpg": "200000245-3463f34640/31EB37EA-579B-4CB3-BE04-AD2826B5C5BF.jpeg",
    "gallery/g60.jpg": "200000256-ef90def910/DDEF37BD-E66A-4FBB-8DD4-B9B31CE242E1.jpeg",
    "gallery/g61.jpg": "200000258-d6527d6529/IMG_2038.jpeg",
}


def download(dest_rel: str, path: str) -> str:
    dest = ROOT / dest_rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    url = f"{BASE}/{path}?ph=03a244d3a1"
    req = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(req, timeout=60) as res, dest.open("wb") as out:
        out.write(res.read())
    return dest_rel


def main() -> None:
    ROOT.mkdir(parents=True, exist_ok=True)
    errors: list[str] = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(download, k, v): k for k, v in FILES.items()}
        for fut in as_completed(futures):
            name = futures[fut]
            try:
                print("ok", fut.result())
            except Exception as exc:  # noqa: BLE001
                errors.append(f"{name}: {exc}")
                print("fail", name, exc)
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"downloaded {len(FILES)} files")


if __name__ == "__main__":
    main()
