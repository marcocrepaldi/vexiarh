"use client";

import React, { FormEvent, useMemo, useState } from "react";
import { LoaderCircle, MessageCircle, Send } from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  challenge: string;
};

type SubmissionStatus = "idle" | "loading" | "success" | "fallback" | "error";

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  challenge: "",
};

const stripHtml = (value: string) => value.replace(/<[^>]+>/g, "").trim();

const buildWhatsappHref = (form: FormState) => {
  const text = [
    "Ola, quero agendar uma demonstracao da VexiaRH.",
    "",
    `Nome: ${form.name}`,
    `Empresa: ${form.company || "(nao informada)"}`,
    `E-mail: ${form.email}`,
    `WhatsApp: ${form.phone || "(nao informado)"}`,
    "",
    "Principal desafio:",
    form.challenge,
  ].join("\n");

  return `https://wa.me/5511985266582?text=${encodeURIComponent(text)}`;
};

export function LeadForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const [fallbackHref, setFallbackHref] = useState("https://wa.me/5511985266582?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20da%20VexiaRH");

  const isDisabled = useMemo(
    () => status === "loading" || !form.name || !form.email || !form.challenge,
    [form.challenge, form.email, form.name, status],
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");
    setFallbackHref(buildWhatsappHref(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: [
            `Empresa: ${form.company || "(nao informada)"}`,
            "",
            "Principal desafio:",
            form.challenge,
          ].join("\n"),
        }),
      });

      const message = stripHtml(await response.text());

      if (response.status === 202) {
        setStatus("fallback");
        setFeedback(
          message || "No momento, estamos finalizando seu atendimento pelo WhatsApp.",
        );
        return;
      }

      if (!response.ok) {
        throw new Error(message || "Nao foi possivel enviar agora. Tente novamente.");
      }

      setStatus("success");
      setFeedback(message || "Recebemos seu contato. Vamos retornar em breve.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Nao foi possivel enviar agora. Tente novamente.",
      );
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/6 p-6 shadow-[0_24px_70px_rgba(3,23,36,0.28)] backdrop-blur-xl md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-2xl bg-[var(--color-accent)]/15 p-3 text-[var(--color-accent)]">
          <Send size={20} strokeWidth={2.4} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
            Solicite uma demonstracao
          </p>
          <h3 className="text-2xl font-black text-white">Fale com o time comercial</h3>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">Nome</span>
            <input
              type="text"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              className="w-full rounded-2xl border border-white/12 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15"
              placeholder="Seu nome"
              required
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">Empresa</span>
            <input
              type="text"
              value={form.company}
              onChange={(event) =>
                setForm((current) => ({ ...current, company: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/12 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15"
              placeholder="Nome da empresa"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">E-mail corporativo</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="w-full rounded-2xl border border-white/12 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15"
              placeholder="voce@empresa.com.br"
              required
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">WhatsApp</span>
            <input
              type="tel"
              value={form.phone}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              className="w-full rounded-2xl border border-white/12 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15"
              placeholder="(11) 99999-9999"
            />
          </label>
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-white/80">Principal desafio hoje</span>
          <textarea
            value={form.challenge}
            onChange={(event) =>
              setForm((current) => ({ ...current, challenge: event.target.value }))
            }
            className="min-h-32 w-full rounded-2xl border border-white/12 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/15"
            placeholder="Ex.: centralizar reconhecimento, performance, documentos e operacao em um unico ambiente."
            required
          />
        </label>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="submit"
            disabled={isDisabled}
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[var(--color-accent)] px-6 py-4 text-base font-bold text-white transition hover:bg-[#d97a1d] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <LoaderCircle className="animate-spin" size={18} />
                Enviando
              </>
            ) : (
              <>
                <Send size={18} />
                Quero ver a plataforma
              </>
            )}
          </button>

          <a
            href={fallbackHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/8"
          >
            <MessageCircle size={18} />
            {status === "fallback" ? "Continuar no WhatsApp" : "Falar no WhatsApp"}
          </a>
        </div>

        {feedback ? (
          <p
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-50"
                : status === "fallback"
                  ? "border-amber-300/35 bg-amber-400/10 text-amber-50"
                : "border-rose-300/30 bg-rose-400/10 text-rose-50"
            }`}
          >
            {feedback}
          </p>
        ) : null}

        <p className="text-sm leading-relaxed text-white/55">
          Conversa objetiva para entender seu contexto e mostrar os modulos mais aderentes a sua
          operacao.
        </p>
      </form>
    </div>
  );
}
