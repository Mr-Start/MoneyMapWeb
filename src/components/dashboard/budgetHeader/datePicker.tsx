"use client";

import * as React from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDate } from "@/context/useDate";
import { ptBR } from "date-fns/locale";

export function DatePicker() {
  const { selectedDate, setSelectedDate } = useDate();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          data-empty={!selectedDate}
          className="data-[empty=true]:text-muted-foreground justify-start text-left font-bold text-white"
        >
          {selectedDate ? (
            format(selectedDate, "MMMM", { locale: ptBR })
              .slice(0, 1)
              .toUpperCase() +
            format(selectedDate, "MMMM", { locale: ptBR }).slice(1) +
            "/" +
            format(selectedDate, "yyyy", { locale: ptBR })
          ) : (
            <span className="text-white">Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
}
