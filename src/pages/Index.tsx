import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Все работы' },
    { id: 'originals', label: 'Оригиналы' },
    { id: 'portraits', label: 'Портреты на заказ' },
    { id: 'copies', label: 'Копии картин' }
  ];

  const artworks = [
    {
      id: 1,
      title: 'Закат над озером',
      category: 'originals',
      price: '45 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f639d28d-7fc0-405a-a7b7-682a6d661be1/files/76557127-4f80-4a15-88ea-0acfa6d59c18.jpg'
    },
    {
      id: 2,
      title: 'Портрет в классическом стиле',
      category: 'portraits',
      price: 'от 30 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f639d28d-7fc0-405a-a7b7-682a6d661be1/files/d3adaf51-3d70-47be-b335-570343cc4f5e.jpg'
    },
    {
      id: 3,
      title: 'Натюрморт с цветами',
      category: 'originals',
      price: '38 000 ₽',
      image: 'https://cdn.poehali.dev/projects/f639d28d-7fc0-405a-a7b7-682a6d661be1/files/eca6d343-0d7b-4848-a5f0-8192725c7c6c.jpg'
    }
  ];

  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === activeCategory);

  const testimonials = [
    {
      id: 1,
      name: 'Елена Соколова',
      text: 'Заказала портрет мамы к юбилею. Работа выполнена безупречно, каждая деталь продумана. Быстрая доставка и отличное качество!',
      rating: 5
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      text: 'Копия картины Айвазовского превзошла все ожидания. Профессиональный подход и внимание к деталям на высшем уровне.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Как выбрать идеальную картину для интерьера',
      date: '15 ноября 2024',
      excerpt: 'Разбираемся в тонкостях подбора живописи под стиль вашего дома.'
    },
    {
      id: 2,
      title: 'Процесс создания портрета: от эскиза до готовой работы',
      date: '8 ноября 2024',
      excerpt: 'Заглянем за кулисы творческого процесса и узнаем все этапы работы.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Галерея</h1>
          <div className="hidden md:flex gap-8">
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#about" className="hover:text-primary transition-colors">О художнике</a>
            <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
                Искусство, которое вдохновляет
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Создаём уникальные произведения искусства. Портреты на заказ, копии известных картин и авторские работы.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  Заказать работу
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Посмотреть галерею
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f639d28d-7fc0-405a-a7b7-682a6d661be1/files/76557127-4f80-4a15-88ea-0acfa6d59c18.jpg" 
                alt="Featured artwork" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-5xl font-light mb-12 text-center">Галерея работ</h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(cat.id)}
                className="px-6"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map(art => (
              <Card key={art.id} className="overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={art.image} 
                      alt={art.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-medium mb-2">{art.title}</h3>
                    <p className="text-primary text-xl font-semibold">{art.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-light mb-6">О художнике</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Более 15 лет посвящаю себя искусству живописи. Работаю в классической технике масляной живописи, 
                создаю портреты на заказ и копии произведений мастеров.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Каждая работа — это уникальное произведение, созданное с любовью и вниманием к деталям. 
                Гарантирую качество и индивидуальный подход к каждому заказу.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">работ</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f639d28d-7fc0-405a-a7b7-682a6d661be1/files/d3adaf51-3d70-47be-b335-570343cc4f5e.jpg" 
                alt="Artist at work"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-light mb-16 text-center">Процесс работы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MessageSquare" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-medium mb-4">1. Консультация</h3>
              <p className="text-muted-foreground">
                Обсуждаем ваши пожелания, выбираем стиль и размер будущей работы
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Palette" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-medium mb-4">2. Создание</h3>
              <p className="text-muted-foreground">
                Работаю над картиной с полной самоотдачей, учитывая все детали
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Truck" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-medium mb-4">3. Доставка</h3>
              <p className="text-muted-foreground">
                Быстрая и надёжная доставка готовой работы прямо к вам домой
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-secondary/40 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">7-14 дней</p>
                <p className="text-muted-foreground">Срок выполнения портрета</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-muted-foreground">Гарантия качества</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">Бесплатно</p>
                <p className="text-muted-foreground">Локальная доставка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-light mb-16 text-center">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="p-8">
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-light mb-16 text-center">Блог</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="h-64 bg-secondary"></div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
                    <h3 className="text-2xl font-medium mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0">
                      Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-light mb-16 text-center">Свяжитесь со мной</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-medium mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">info@gallery.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-1">Адрес</p>
                    <p className="text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="font-medium mb-4">Социальные сети</p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Send" size={20} />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-medium mb-6">Форма заказа</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="bg-background" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="bg-background" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="bg-background" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите, что вы хотите заказать" 
                      className="bg-background min-h-32"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Галерея. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
