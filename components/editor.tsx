"use client";

import {
  BlockNoteEditor,
  PartialBlock
} from "@blocknote/core";

import "@blocknote/core/style.css";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote, useBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export const Editor = ({
  onChange,
  editable,
  initialContent
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });

    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent 
      ? JSON.parse(initialContent) as PartialBlock[] 
      : undefined,
    uploadFile: handleUpload
  });
  return (
    <BlockNoteView 
      editor={editor}
      editable={editable}
      theme={resolvedTheme === "dark" ? "dark" : "light" }
      onChange={() => {onChange(JSON.stringify(editor.document))}}
    />
  )
}