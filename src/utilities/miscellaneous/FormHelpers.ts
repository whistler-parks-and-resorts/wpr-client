import React from "react";

export function eventStringValue(event: React.FormEvent<HTMLInputElement>): string {
  return (event.target as HTMLInputElement).value;
}
