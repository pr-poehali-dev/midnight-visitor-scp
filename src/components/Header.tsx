import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface HeaderProps {
  onScpSelect: (scpId: string) => void;
  selectedScp: string;
}

const Header = ({ onScpSelect, selectedScp }: HeaderProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    objectName: "",
    description: "",
  });

  const scpObjects = [
    { id: "xxx", name: "SCP-XXX", subtitle: "Полуночный Посетитель" },
    { id: "xxxx", name: "SCP-XXXX", subtitle: "Карточник" },
    { id: "yyyy", name: "SCP-YYYY", subtitle: "Черный Волк" },
    { id: "zzzz", name: "SCP-████", subtitle: "Полуденные Игрища" },
    { id: "yyyy-a", name: "SCP-YYYY-A", subtitle: "Энгельсский Диалект" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
    setFormData({ name: "", email: "", objectName: "", description: "" });
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon name="Shield" className="h-8 w-8 text-accent" />
          <h1 className="text-2xl font-bold font-mono text-foreground">
            SCP Fontinios
          </h1>
        </div>

        <nav className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="font-mono">
                <Icon name="Database" className="h-4 w-4 mr-2" />
                SCP Объекты
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle className="font-mono text-2xl">
                  База данных SCP
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-3">
                {scpObjects.map((scp) => (
                  <button
                    key={scp.id}
                    onClick={() => onScpSelect(scp.id)}
                    className={`w-full text-left p-4 rounded border transition-all hover:bg-secondary ${
                      selectedScp === scp.id
                        ? "border-primary bg-secondary"
                        : "border-border"
                    }`}
                  >
                    <div className="font-mono font-bold text-primary">
                      {scp.name}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {scp.subtitle}
                    </div>
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="font-mono">
                <Icon name="FileText" className="h-4 w-4 mr-2" />
                Подать заявку
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="font-mono text-2xl">
                  Заявка на регистрацию объекта
                </DialogTitle>
                <DialogDescription>
                  Заполните форму для подачи заявки на регистрацию нового SCP
                  объекта
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя исследователя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Доктор ████████"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="researcher@scp.foundation"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="objectName">Название объекта</Label>
                  <Input
                    id="objectName"
                    value={formData.objectName}
                    onChange={(e) =>
                      setFormData({ ...formData, objectName: e.target.value })
                    }
                    placeholder="SCP-████"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Краткое описание</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Опишите аномальные свойства объекта..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full font-mono">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </nav>
      </div>
    </header>
  );
};

export default Header;