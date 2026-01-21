import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { toast } = useToast();

  const achievements = [
    {
      title: 'Почётная грамота Министерства образования РФ',
      year: '2023',
      description: 'За выдающиеся достижения в области образования',
      icon: 'Award'
    },
    {
      title: 'Победитель конкурса "Директор года"',
      year: '2022',
      description: 'Региональный этап всероссийского конкурса',
      icon: 'Trophy'
    },
    {
      title: 'Благодарность губернатора',
      year: '2021',
      description: 'За вклад в развитие системы образования региона',
      icon: 'Medal'
    },
    {
      title: 'Сертификат MBA в образовании',
      year: '2020',
      description: 'Программа повышения квалификации руководителей',
      icon: 'GraduationCap'
    },
    {
      title: 'Знак "Отличник народного просвещения"',
      year: '2019',
      description: 'За многолетний педагогический труд',
      icon: 'Star'
    },
    {
      title: 'Диплом за инновации в образовании',
      year: '2018',
      description: 'Внедрение цифровых технологий в учебный процесс',
      icon: 'Lightbulb'
    }
  ];

  const education = [
    {
      degree: 'Высшее педагогическое образование',
      institution: 'Московский государственный педагогический университет',
      specialization: 'Педагогика и методика начального образования',
      year: '1995'
    },
    {
      degree: 'Магистратура',
      institution: 'Российская академия образования',
      specialization: 'Управление образовательными системами',
      year: '2010'
    },
    {
      degree: 'Повышение квалификации',
      institution: 'Высшая школа экономики',
      specialization: 'Современные технологии управления школой',
      year: '2022'
    }
  ];

  const experience = [
    {
      position: 'Директор МБОУ СОШ №42',
      period: '2015 — настоящее время',
      achievements: [
        'Повышение качества образования на 25%',
        'Внедрение цифровой образовательной среды',
        'Создание системы наставничества для молодых педагогов',
        'Открытие 5 новых профильных классов'
      ]
    },
    {
      position: 'Заместитель директора по учебной работе',
      period: '2010 — 2015',
      achievements: [
        'Разработка индивидуальных образовательных траекторий',
        'Организация олимпиадного движения',
        'Координация методической работы'
      ]
    },
    {
      position: 'Учитель начальных классов',
      period: '1995 — 2010',
      achievements: [
        'Классный руководитель 4 выпусков',
        'Победитель конкурса "Учитель года" (муниципальный уровень)',
        'Наставник молодых специалистов'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setDialogOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-heading font-bold text-primary">
              Смелякова Е.А.
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О директоре', 'Достижения', 'Образование', 'Опыт', 'Контакты'].map((item, idx) => {
                const ids = ['hero', 'about', 'achievements', 'education', 'experience', 'contacts'];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(ids[idx])}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      activeSection === ids[idx] ? 'text-secondary' : 'text-foreground/70'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
                Директор МБОУ СОШ №42
              </Badge>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
                Смелякова<br />Елена Александровна
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Опытный руководитель образовательного учреждения с 28-летним педагогическим стажем.
                Стремлюсь к созданию современной инновационной школы, где каждый ребёнок раскрывает свой потенциал.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection('achievements')}>
                  Достижения
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Связаться
                </Button>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://cdn.poehali.dev/projects/9660f5b2-70b2-4de9-98ac-3aedfaf6c918/files/7ed4df6a-73fa-415c-8984-ccf956b632e0.jpg"
                  alt="Смелякова Елена Александровна"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">О директоре</h2>
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              Елена Александровна Смелякова — опытный педагог и руководитель с глубоким пониманием современных
              образовательных процессов. За годы работы в системе образования она прошла путь от учителя начальных
              классов до директора одной из ведущих школ города.
            </p>
            <p className="text-lg">
              Под её руководством школа стала центром инновационного образования, где внедряются передовые
              педагогические технологии, развивается цифровая образовательная среда, и создаются условия для
              всестороннего развития каждого ребёнка.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Icon name="Users" size={40} className="mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-heading font-bold text-primary mb-2">28</div>
                  <div className="text-sm text-foreground/70">лет в образовании</div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Icon name="Award" size={40} className="mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-heading font-bold text-primary mb-2">12+</div>
                  <div className="text-sm text-foreground/70">наград и достижений</div>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="pt-6 text-center">
                  <Icon name="School" size={40} className="mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-heading font-bold text-primary mb-2">850+</div>
                  <div className="text-sm text-foreground/70">учеников в школе</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">
            Достижения и награды
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Профессиональные достижения, отражающие многолетний вклад в развитие образования
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary/50"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Icon name={achievement.icon as any} size={28} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-accent mb-2">{achievement.year}</div>
                      <h3 className="font-heading font-semibold text-primary mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-foreground/70">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">Образование</h2>
          <p className="text-center text-foreground/70 mb-12">
            Академический путь и профессиональное развитие
          </p>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <Card key={idx} className="border-l-4 border-l-secondary hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Icon name="GraduationCap" size={28} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-heading font-semibold text-primary text-lg">{edu.degree}</h3>
                        <Badge variant="outline" className="border-accent text-accent">{edu.year}</Badge>
                      </div>
                      <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-foreground/70">{edu.specialization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">Опыт работы</h2>
          <p className="text-center text-foreground/70 mb-12">
            Профессиональный путь от учителя до директора школы
          </p>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Icon name="Briefcase" size={28} className="text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-primary text-xl mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <Icon name="Calendar" size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-14">
                    <h4 className="font-medium text-foreground mb-3">Ключевые достижения:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icon name="CheckCircle" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-heading font-bold text-primary mb-4 text-center">Контакты</h2>
          <p className="text-center text-foreground/70 mb-12">
            Свяжитесь для обсуждения вопросов образования и сотрудничества
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="Mail" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Email</h3>
                    <p className="text-foreground/80">director@school42.edu.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="Phone" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Телефон</h3>
                    <p className="text-foreground/80">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="MapPin" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Адрес школы</h3>
                    <p className="text-foreground/80">г. Москва, ул. Школьная, д. 42</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name="Clock" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary mb-2">Приёмные часы</h3>
                    <p className="text-foreground/80">Пн-Пт: 14:00 — 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90" onClick={() => setDialogOpen(true)}>
              <Icon name="Send" size={20} className="mr-2" />
              Записаться на приём
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Смелякова Е.А.</h3>
              <p className="text-primary-foreground/80 text-sm">
                Директор МБОУ СОШ №42<br />
                Москва, Россия
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm">
                {['Главная', 'О директоре', 'Достижения', 'Образование', 'Опыт', 'Контакты'].map((item, idx) => {
                  const ids = ['hero', 'about', 'achievements', 'education', 'experience', 'contacts'];
                  return (
                    <button
                      key={item}
                      onClick={() => scrollToSection(ids[idx])}
                      className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>director@school42.edu.ru</p>
                <p>+7 (495) 123-45-67</p>
                <p>Москва, ул. Школьная, 42</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
            © 2024 Смелякова Елена Александровна. Все права защищены.
          </div>
        </div>
      </footer>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-primary">Обратная связь</DialogTitle>
            <DialogDescription>
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="ivan@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Опишите ваш вопрос или запрос..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-secondary hover:bg-secondary/90">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить
              </Button>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Отмена
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;