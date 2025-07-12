import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Scale, 
  Users, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  Menu,
  X,
  MessageCircle
} from 'lucide-react'
import './App.css'

// Componente Header
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-900">
              Dra. [Nome]
            </h1>
            <p className="text-sm text-gray-600">Advocacia Especializada</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-900 transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-900 transition-colors">Serviços</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-900 transition-colors">Contato</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-900 transition-colors">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-900 transition-colors">Sobre</a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-900 transition-colors">Serviços</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-900 transition-colors">Contato</a>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

// Componente Hero
function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-900 hover:bg-blue-200">
                Advocacia Especializada
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Defendendo seus
                <span className="text-blue-900 block">direitos com</span>
                <span className="text-amber-600">excelência</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Mais de [X] anos de experiência em Direito Civil, Trabalhista e de Família. 
                Atendimento personalizado e resultados efetivos para cada cliente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50">
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">[X]+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">[X]+</div>
                <div className="text-sm text-gray-600">Casos Resolvidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">[X]%</div>
                <div className="text-sm text-gray-600">Taxa de Sucesso</div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Foto Profissional<br />
                  da Advogada
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Services
function Services() {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, direitos reais e questões patrimoniais.",
      features: ["Contratos", "Indenizações", "Propriedade", "Sucessões"]
    },
    {
      icon: Users,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos do trabalhador e questões previdenciárias.",
      features: ["Rescisões", "Horas Extras", "FGTS", "Previdência"]
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Divórcio, guarda, pensão alimentícia e questões familiares.",
      features: ["Divórcio", "Guarda", "Pensão", "Adoção"]
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-900">Áreas de Atuação</Badge>
          <h2 className="text-4xl font-bold text-gray-900">
            Serviços Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos atendimento especializado em diversas áreas do direito, 
            sempre com foco na excelência e nos melhores resultados para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-900" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6 border-blue-900 text-blue-900 hover:bg-blue-50">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente About
function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center">
                  Foto Profissional<br />
                  no Escritório
                </p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-900">Sobre a Advogada</Badge>
              <h2 className="text-4xl font-bold text-gray-900">
                Dra. [Nome Completo]
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Formada em Direito pela [Universidade], com especialização em [Área]. 
                Dedica-se há mais de [X] anos à advocacia, sempre priorizando a ética, 
                transparência e os melhores resultados para seus clientes.
              </p>
            </div>

            {/* Credenciais */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Formação e Credenciais</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Graduação em Direito</p>
                    <p className="text-sm text-gray-600">[Universidade] - [Ano]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Especialização em [Área]</p>
                    <p className="text-sm text-gray-600">[Instituição] - [Ano]</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">OAB/[Estado] nº [Número]</p>
                    <p className="text-sm text-gray-600">Registro ativo desde [Ano]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg">
                <Star className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Excelência</h4>
                <p className="text-sm text-gray-600">Compromisso com a qualidade</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Dedicação</h4>
                <p className="text-sm text-gray-600">Atendimento personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Contact
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-900">Entre em Contato</Badge>
          <h2 className="text-4xl font-bold text-gray-900">
            Agende sua Consulta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar você. Entre em contato e agende uma consulta 
            para discutir seu caso com nossa equipe especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">(XX) XXXXX-XXXX</p>
                    <p className="text-sm text-gray-500">Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">contato@[email].com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Endereço</h4>
                    <p className="text-gray-600">
                      [Endereço Completo]<br />
                      [Cidade] - [Estado] - [CEP]
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <p className="text-sm text-gray-600">Atendimento rápido e direto</p>
                  </div>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Conversar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <Card>
            <CardHeader>
              <CardTitle>Envie sua Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entraremos em contato em breve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(XX) XXXXX-XXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Qual o assunto do seu caso?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva brevemente seu caso ou dúvida..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Dra. [Nome]</h3>
            <p className="text-gray-400">
              Advocacia especializada com foco na excelência e nos melhores resultados para nossos clientes.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Áreas de Atuação */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Direito Civil</li>
              <li className="text-gray-400">Direito Trabalhista</li>
              <li className="text-gray-400">Direito de Família</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>(XX) XXXXX-XXXX</p>
              <p>contato@[email].com</p>
              <p>[Endereço]<br />[Cidade] - [Estado]</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dra. [Nome]. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">OAB/[Estado] nº [Número]</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

