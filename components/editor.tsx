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

  const editor = useCreateBlockNote({
    initialContent: initialContent 
      ? JSON.parse(initialContent) as PartialBlock[] 
      : undefined,
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