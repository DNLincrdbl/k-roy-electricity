"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Field =
  | {
      name: string;
      label: string;
      type?: "text" | "email" | "tel" | "textarea";
      required?: boolean;
      span?: "half" | "full";
    }
  | {
      name: string;
      label: string;
      type: "select";
      options: string[];
      required?: boolean;
      span?: "half" | "full";
    }
  | {
      name: string;
      label: string;
      type: "radio";
      options: string[];
      required?: boolean;
      span?: "half" | "full";
    };

const inputClass =
  "mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-[14px] text-[#171a20] outline-none placeholder:text-[#8a8d91] [color-scheme:light] focus:border-gold";

function fieldSpan(field: Field, columns: 1 | 2) {
  if (columns === 1) return "";
  if (field.type === "textarea" || field.type === "radio") return "sm:col-span-2";
  if (field.span === "full") return "sm:col-span-2";
  if (field.span === "half") return "";
  return "";
}

export function MailForm({
  subject,
  fields,
  submitLabel,
  columns = 1,
}: {
  subject: string;
  fields: Field[];
  submitLabel: string;
  columns?: 1 | 2;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const lines = fields
      .map((field) => `${field.label}: ${String(data.get(field.name) || "-")}`)
      .join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <p className="rounded-2xl bg-white p-6 text-[14px] leading-relaxed text-[#171a20]">
        Köszönjük. Ha a levelezőprogram megnyílt, küldje el az üzenetet. Közvetlenül is elér
        minket: {site.email} · {site.phone}
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        columns === 2
          ? "grid grid-cols-1 gap-5 text-[#171a20] sm:grid-cols-2"
          : "space-y-5 text-[#171a20]"
      }
    >
      {fields.map((field) =>
        field.type === "radio" ? (
          <fieldset
            key={field.name}
            className={`block text-[14px] text-[#171a20] ${fieldSpan(field, columns)}`}
          >
            <legend className="font-medium text-[#171a20]">{field.label}</legend>
            <div
              className={`mt-3 grid gap-2 ${
                field.options.length <= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              {field.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 rounded-lg border border-line bg-white px-4 py-3 text-[#171a20]"
                >
                  <input type="radio" name={field.name} value={option} required={field.required} />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <label
            key={field.name}
            className={`block text-[14px] font-medium text-[#171a20] ${fieldSpan(field, columns)}`}
          >
            {field.label}
            {field.type === "textarea" ? (
              <textarea name={field.name} rows={5} required={field.required} className={inputClass} />
            ) : field.type === "select" ? (
              <select name={field.name} required={field.required} className={inputClass}>
                {field.options.map((option) => (
                  <option key={option} value={option} className="bg-white text-[#171a20]">
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className={inputClass}
              />
            )}
          </label>
        ),
      )}
      <label
        className={`flex items-start gap-3 text-[14px] font-normal text-[#5c5e62] ${
          columns === 2 ? "sm:col-span-2" : ""
        }`}
      >
        <input type="checkbox" required className="mt-1 accent-[#171a20]" name="gdpr" value="igen" />
        <span>
          Elfogadom a személyes adataim kezelését a kapcsolatfelvételhez. Részletek:{" "}
          <Link href="/adatkezeles" className="text-gold underline">
            Adatkezelési tájékoztató
          </Link>
          .
        </span>
      </label>
      <button
        type="submit"
        className={`rounded-full bg-gold px-8 py-2.5 text-[14px] font-medium text-white hover:bg-gold-soft ${
          columns === 2 ? "sm:col-span-2 sm:justify-self-start" : ""
        }`}
      >
        {submitLabel}
      </button>
    </form>
  );
}
