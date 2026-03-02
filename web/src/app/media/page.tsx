"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type MediaItem = {
  id: string;
  name: string;
  src: string;
  origin: "upload" | "url";
  createdAt: number;
};

const primary = "#005B63";
const accent = "#F18921";
const STORAGE_KEY = "vexiarh-media";

const loadInitialItems = (): MediaItem[] => {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];
  try {
    return JSON.parse(saved) as MediaItem[];
  } catch {
    return [];
  }
};

export default function MediaLibrary() {
  const [items, setItems] = useState<MediaItem[]>(loadInitialItems);
  const [urlInput, setUrlInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isAdminMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("adminMode") === "true";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const sortedItems = useMemo(() => [...items].sort((a, b) => b.createdAt - a.createdAt), [items]);

  const addItems = (newItems: MediaItem[]) => {
    if (!newItems.length) return;
    setItems((prev) => [...prev, ...newItems]);
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || !files.length) return;
    const readers = Array.from(files).map(
      (file) =>
        new Promise<MediaItem>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              id: crypto.randomUUID(),
              name: file.name,
              src: reader.result as string,
              origin: "upload",
              createdAt: Date.now(),
            });
          };
          reader.onerror = () => reject(reader.error);
          reader.readAsDataURL(file);
        }),
    );
    try {
      const results = await Promise.all(readers);
      addItems(results);
    } catch {
      // simple fail-silently; could add toast
    }
  };

  const handleAddUrl = () => {
    const trimmed = urlInput.trim();
    if (!trimmed) return;
    addItems([
      {
        id: crypto.randomUUID(),
        name: trimmed.split("/").pop() || "imagem",
        src: trimmed,
        origin: "url",
        createdAt: Date.now(),
      },
    ]);
    setUrlInput("");
  };

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (!isAdminMode) {
    return (
      <div className="wrapper" style={{ background: "#f7f9fb", minHeight: "100vh" }}>
        <header id="header" className="header default text-dark">
          <div className="menu" id="onepagenav">
            <nav id="menu" className="mega-menu">
              <section className="menu-list-items">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 position-relative d-flex align-items-center justify-content-between">
                      <ul className="menu-logo mb-0">
                        <li>
                          <Link href="/">
                            <Image id="logo_img" src="/demo-one-page/agency-02/images/logo.png" alt="VexiaRH" width={148} height={42} />
                          </Link>
                        </li>
                      </ul>
                      <div className="menu-bar">
                        <ul className="menu-links mb-0">
                          <li>
                            <Link href="/">Voltar para Início</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </nav>
          </div>
        </header>
        <section className="page-section-ptb" style={{ paddingTop: 140 }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h1 style={{ fontWeight: 800, color: primary, marginBottom: 12 }}>Acesso restrito</h1>
                <p className="lead" style={{ marginBottom: 24 }}>
                  A biblioteca de imagens é visível apenas em modo admin. Ative o <strong>adminMode</strong> (localStorage) ou faça login como
                  admin para continuar.
                </p>
                <p className="mb-0" style={{ color: "#475467" }}>
                  Dica rápida: o site já usa `adminMode` no localStorage para alternar visão de gestão. Defina <code>adminMode=true</code> para
                  liberar esta página.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="wrapper" style={{ background: "#f7f9fb", minHeight: "100vh" }}>
      <header id="header" className="header default text-dark">
        <div className="menu" id="onepagenav">
          <nav id="menu" className="mega-menu">
            <section className="menu-list-items">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 position-relative d-flex align-items-center justify-content-between">
                    <ul className="menu-logo mb-0">
                      <li>
                        <Link href="/">
                          <Image id="logo_img" src="/demo-one-page/agency-02/images/logo.png" alt="VexiaRH" width={148} height={42} />
                        </Link>
                      </li>
                    </ul>
                    <div className="menu-bar">
                      <ul className="menu-links mb-0">
                        <li>
                          <Link href="/">Voltar para Início</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </nav>
        </div>
      </header>

      <section className="page-section-ptb" style={{ paddingTop: 140 }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <p className="mb-10" style={{ color: accent, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700 }}>
                Biblioteca de Imagens
              </p>
              <h1 className="mb-20" style={{ fontWeight: 800, color: primary }}>
                Centralize as imagens do seu sistema em um só lugar.
              </h1>
              <p className="lead mb-30">
                Envie arquivos ou cole URLs. As imagens ficam disponíveis localmente para você pré-visualizar e reutilizar enquanto navega no
                portal.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  className="button"
                  style={{ background: accent, borderColor: accent }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  Upload de imagens
                </button>
                <label
                  htmlFor="urlInput"
                  className="button button-border"
                  style={{ borderColor: primary, color: primary, background: "transparent" }}
                >
                  Adicionar por URL
                </label>
              </div>
              <div className="mt-3 d-flex gap-2 align-items-center">
                <input
                  id="urlInput"
                  type="url"
                  placeholder="https://exemplo.com/imagem.png"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 6,
                    border: "1px solid #d0d5dd",
                    minWidth: 0,
                  }}
                />
                <button className="button" style={{ background: primary, borderColor: primary }} onClick={handleAddUrl}>
                  Inserir
                </button>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                hidden
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: "2px dashed #cbd5e1",
                  borderRadius: 12,
                  padding: 24,
                  background: "#fff",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <p className="mb-2" style={{ fontWeight: 700, color: primary }}>
                  Arraste e solte suas imagens aqui
                </p>
                <p className="mb-0" style={{ color: "#475467" }}>
                  PNG, JPG, SVG • Múltiplos arquivos • Também funciona colando uma URL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section-ptb" style={{ background: "#fff" }}>
        <div className="container">
          <div className="row mb-30 align-items-center">
            <div className="col-lg-8">
              <h3 style={{ color: primary, marginBottom: 8 }}>Suas imagens</h3>
              <p className="mb-0 text-muted">As imagens ficam salvas no navegador (localStorage). Remova quando não precisar mais.</p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <span className="badge" style={{ background: accent, color: "#fff", padding: "8px 12px", borderRadius: 999 }}>
                {items.length} itens
              </span>
            </div>
          </div>

          {sortedItems.length === 0 ? (
            <div className="p-4 bg-light" style={{ borderRadius: 12, border: "1px dashed #d0d5dd" }}>
              <p className="mb-1" style={{ color: primary, fontWeight: 600 }}>
                Nada por aqui ainda.
              </p>
              <p className="mb-0" style={{ color: "#475467" }}>
                Envie arquivos ou cole uma URL para começar a sua biblioteca.
              </p>
            </div>
          ) : (
            <div className="row gy-4">
              {sortedItems.map((item) => (
                <div className="col-md-4 col-sm-6" key={item.id}>
                  <div
                    className="p-3 h-100 shadow-sm"
                    style={{ borderRadius: 12, background: "#f8fafc", border: "1px solid #e2e8f0" }}
                  >
                    <div style={{ position: "relative", paddingBottom: "62%", overflow: "hidden", borderRadius: 10, marginBottom: 12 }}>
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <p className="mb-1" style={{ fontWeight: 600, color: primary, wordBreak: "break-word" }}>
                      {item.name}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <span style={{ fontSize: 12, color: "#475467" }}>{item.origin === "upload" ? "Upload" : "URL"}</span>
                      <button
                        className="button button-border"
                        style={{ borderColor: "#e11d48", color: "#e11d48", padding: "6px 10px" }}
                        onClick={() => handleRemove(item.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
