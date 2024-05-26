"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

const client = new QueryClient();

export default function Providers({ children }: Props) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
