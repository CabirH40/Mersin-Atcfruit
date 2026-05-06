import React, { useState } from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "EN", name: "English" },
  { code: "TR", name: "Türkçe" },
  { code: "AR", name: "العربية" },
];

const LanguageSwitcher = ({ scrolled }: { scrolled: boolean }) => {
  const [currentLang, setCurrentLang] = useState("EN");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-2 rounded-full px-3 ${
            scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
          }`}
        >
          <Globe size={16} />
          <span className="font-bold text-xs">{currentLang}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setCurrentLang(lang.code)}
            className="cursor-pointer font-medium"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;