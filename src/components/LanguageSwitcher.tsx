import React from "react";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/content";

const languages = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
  { code: "ar", name: "العربية" },
];

const LanguageSwitcher = ({ scrolled }: { scrolled: boolean }) => {
  const { language, setLanguage } = useLanguage();

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
          <span className="font-bold text-xs uppercase">{language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-xl">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            onClick={() => setLanguage(lang.code as Language)}
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