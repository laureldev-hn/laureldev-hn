import { useEffect } from "react";

interface DocumentMeta {
  title: string;
  description?: string;
}

/** Ajusta el título y la meta description en el cliente, ya que el sitio es una SPA. */
export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    document.title = title;

    if (!description) return;

    const tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previous = tag?.content;
    if (tag) tag.content = description;

    return () => {
      if (tag && previous !== undefined) tag.content = previous;
    };
  }, [title, description]);
}
