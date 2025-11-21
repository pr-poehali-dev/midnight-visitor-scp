import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";

const Index = () => {
  const [selectedScp, setSelectedScp] = useState("xxx");
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string; role: string } | null>(null);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    containment: true,
    description: true,
    addendum1: false,
    addendum2: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onScpSelect={setSelectedScp} 
        selectedScp={selectedScp}
        onUserLogin={setCurrentUser}
        currentUser={currentUser}
      />
      <Alert className="border-accent bg-accent/10 m-6 rounded-sm">
        <Icon name="ShieldAlert" className="h-5 w-5 text-accent" />
        <AlertDescription className="text-accent font-mono text-sm ml-6">
          ПРЕДУПРЕЖДЕНИЕ: Доступ к данному файлу ограничен. Несанкционированный
          доступ карается согласно Протоколу 12-Omega.
        </AlertDescription>
      </Alert>

      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        <div className="border-l-4 border-accent pl-6 space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold font-mono text-primary">
              SCP-XXX
            </h1>
            <Badge variant="destructive" className="font-mono">
              ЕВКЛИД
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground font-mono">
            "Полуночный Посетитель"
          </p>
        </div>

        <Card className="p-6 border-border bg-card animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
              <Icon name="Lock" className="h-5 w-5" />
              Класс объекта
            </h2>
          </div>
          <div className="space-y-2">
            <Badge className="bg-accent text-accent-foreground font-mono text-lg px-4 py-2">
              ЕВКЛИД
            </Badge>
          </div>
        </Card>

        <Collapsible
          open={openSections.containment}
          onOpenChange={() => toggleSection("containment")}
        >
          <Card className="border-border bg-card overflow-hidden animate-fade-in">
            <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                <Icon name="Shield" className="h-5 w-5" />
                Особые условия содержания
              </h2>
              <Icon
                name={openSections.containment ? "ChevronUp" : "ChevronDown"}
                className="h-5 w-5 text-primary"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 pt-0 space-y-4 text-muted-foreground leading-relaxed animate-accordion-down">
              <p>
                SCP-XXX невозможно полноценно содержать из-за его непредсказуемых
                перемещений и спонтанных появлений. Вместо этого, Фонд
                сосредоточен на протоколах дезинформации и экстренного
                реагирования.
              </p>
              <p>
                В каждом городе, где зафиксирована активность SCP-XXX, должны быть
                внедрены не менее двух агентов под прикрытием работников
                социальных служб или сотрудников полиции. Их задача - мониторинг
                сообщений о "странных личностях" в жилых районах и нейтрализация
                последствий деятельности SCP-XXX.
              </p>
              <p>
                Разработан и поддерживается комплекс мер дезинформации,
                направленный на объяснение появлений SCP-XXX как "детских
                страхов", "галлюцинаций", "шуток пранкеров" или "происшествий с
                участием грабителей".
              </p>
              <p>
                В случае задокументированной гибели ребенка, связанной с SCP-XXX,
                проводятся тщательные расследования с целью сокрытия связи с
                аномалией. Семьям погибших выплачиваются компенсации и оказывается
                психологическая помощь.
              </p>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.description}
          onOpenChange={() => toggleSection("description")}
        >
          <Card className="border-border bg-card overflow-hidden animate-fade-in">
            <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                <Icon name="FileText" className="h-5 w-5" />
                Описание
              </h2>
              <Icon
                name={openSections.description ? "ChevronUp" : "ChevronDown"}
                className="h-5 w-5 text-primary"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 pt-0 space-y-4 text-muted-foreground leading-relaxed animate-accordion-down">
              <p>
                SCP-XXX - это гуманоидная сущность ростом около 1.8 метров. Его
                тело полностью покрыто черной субстанцией, похожей на сажу или
                темное масло. У SCP-XXX непропорционально большие глаза, полностью
                черные и лишенные зрачков. Неизвестно, носит ли SCP-XXX одежду или
                его "черная кожа" является его естественным покровом.
              </p>
              <p>
                SCP-XXX появляется исключительно в многоквартирных жилых домах,
                чаще всего вечером или ночью. Он перемещается по подъездам,
                бесшумно передвигаясь по лестницам и коридорам. SCP-XXX
                целенаправленно ищет детей в возрасте от 3 до 12 лет, остающихся
                без присмотра взрослых (одни в квартире, поздно гуляющие во дворе,
                идущие домой из школы/магазина без сопровождения).
              </p>

              <div className="bg-secondary/50 p-4 rounded border border-border space-y-3 my-4">
                <h3 className="font-mono text-primary font-semibold flex items-center gap-2">
                  <Icon name="AlertTriangle" className="h-4 w-4" />
                  Классификация воздействий
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="font-mono shrink-0">
                      ТИП А
                    </Badge>
                    <p>
                      Пристальное наблюдение с шипящим звуком. Вызывает страх,
                      ночные кошмары, тревогу и другие психологические проблемы.
                      ~83% случаев.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge
                      variant="outline"
                      className="font-mono shrink-0 border-accent text-accent"
                    >
                      ТИП Б
                    </Badge>
                    <p>
                      Физическое насилие (толчки, щипки, попытки схватить).
                      Приводит к серьезным травмам и увечьям. ~15% случаев.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge
                      variant="destructive"
                      className="font-mono shrink-0 redacted-flicker"
                    >
                      ТИП С
                    </Badge>
                    <p>
                      Смерть ребенка (обширные внутренние повреждения или
                      остановка сердца). Требует максимального уровня секретности.
                      ~2% случаев типа Б.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Поведение SCP-XXX по отношению к детям варьируется. В большинстве
                случаев он просто пристально смотрит на ребенка, издавая тихий,
                шипящий звук.
              </p>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.addendum1}
          onOpenChange={() => toggleSection("addendum1")}
        >
          <Card className="border-accent/50 bg-card overflow-hidden animate-fade-in">
            <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                <Icon name="Eye" className="h-5 w-5" />
                Дополнение XXX-1: Записи наблюдений
              </h2>
              <Icon
                name={openSections.addendum1 ? "ChevronUp" : "ChevronDown"}
                className="h-5 w-5 text-primary"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 pt-0 space-y-6 animate-accordion-down">
              <div className="bg-secondary p-4 rounded border-l-4 border-primary space-y-2">
                <h3 className="font-mono text-sm text-primary font-bold">
                  ПРОТОКОЛ НАБЛЮДЕНИЯ XXX-1-1
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Агент ██████ наблюдал SCP-XXX в многоквартирном доме в
                  ██████████, Россия. SCP-XXX несколько раз проходил мимо
                  квартиры, в которой, по данным агента, проживала 6-летняя
                  девочка, часто остающаяся одна дома. Агент не зафиксировал
                  попыток проникновения в квартиру, но отметил, что SCP-XXX каждый
                  раз замедлял шаг, проходя мимо двери.
                </p>
              </div>

              <div className="bg-secondary p-4 rounded border-l-4 border-primary space-y-2">
                <h3 className="font-mono text-sm text-primary font-bold">
                  ПРОТОКОЛ НАБЛЮДЕНИЯ XXX-1-2
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Анализ записей с камер видеонаблюдения в подъезде жилого дома в
                  ██████, США, показал, что SCP-XXX вошел в подъезд вслед за
                  8-летним мальчиком, возвращавшимся из магазина. SCP-XXX двигался
                  с неестественной скоростью, телепортируясь на короткие
                  расстояния, чтобы не отстать от мальчика. Когда мальчик вошел в
                  свою квартиру, SCP-XXX остановился у двери и несколько минут
                  пристально смотрел на нее.
                </p>
              </div>

              <div className="bg-destructive/10 p-4 rounded border-l-4 border-destructive space-y-2">
                <h3 className="font-mono text-sm text-destructive font-bold flex items-center gap-2">
                  <Icon name="Skull" className="h-4 w-4" />
                  ПРОТОКОЛ НАБЛЮДЕНИЯ XXX-1-3
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  В ████████, Германия, зафиксирован случай "воздействия типа С".
                  10-летний мальчик был найден мертвым в подъезде своего дома.
                  Согласно заключению судмедэкспертов, смерть наступила в
                  результате разрыва внутренних органов. На теле мальчика
                  обнаружены следы темной субстанции, схожей с той, которой
                  покрыт SCP-XXX.
                </p>
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Collapsible
          open={openSections.addendum2}
          onOpenChange={() => toggleSection("addendum2")}
        >
          <Card className="border-border bg-card overflow-hidden animate-fade-in">
            <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-secondary/50 transition-colors">
              <h2 className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                <Icon name="BookOpen" className="h-5 w-5" />
                Дополнение XXX-2: Теории
              </h2>
              <Icon
                name={openSections.addendum2 ? "ChevronUp" : "ChevronDown"}
                className="h-5 w-5 text-primary"
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 pt-0 space-y-4 text-muted-foreground leading-relaxed animate-accordion-down">
              <p>
                Некоторые исследователи предполагают, что SCP-XXX является
                проявлением коллективного страха детей, остающихся без присмотра.
                Эта теория объясняет, почему SCP-XXX появляется только в жилых
                домах и почему его жертвами становятся именно дети.
              </p>
              <p>
                Другая теория утверждает, что SCP-XXX является сущностью из
                другого измерения, которая питается детским страхом.
              </p>
              <p className="italic">
                Пока не существует надежных способов проверить ни одну из этих
                теорий.
              </p>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <Alert className="border-destructive bg-destructive/10 rounded-sm animate-fade-in">
          <Icon name="ShieldX" className="h-5 w-5 text-destructive" />
          <AlertDescription className="text-destructive font-mono text-sm ml-6 redacted-flicker">
            ПРЕДУПРЕЖДЕНИЕ: Доступ к данному файлу ограничен.
            Несанкционированный доступ карается согласно Протоколу 12-Omega.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Index;