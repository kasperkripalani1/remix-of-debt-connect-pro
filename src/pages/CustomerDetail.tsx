import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar,
  Clock,
  User,
  MapPin,
  Briefcase,
  CreditCard,
  Shield,
  Car,
  PiggyBank,
  AlertCircle,
  CheckCircle2,
  Send,
  Edit,
  Sparkles,
  FileText,
  Upload
} from "lucide-react";

// Customer data for Maximilian Berger
const customerData = {
  name: "Maximilian Berger",
  location: "München, Deutschland",
  age: 34,
  familyStatus: "Verheiratet, 1 Kind",
  profession: "IT-Systemadministrator (unbefristet)",
  employedSince: "6 Jahre",
  netIncome: 3200,
  schufaScore: 92,
  phone: "+49 151 23456789",
  email: "maximilian.berger@example.de",
  preferredChannel: "WhatsApp",
  creditor: "Sparkasse München",
  creditorContact: {
    name: "Frau L. Schneider",
    department: "Kreditabteilung",
    phone: "+49 89 1234-567",
    email: "l.schneider@sparkasse-muenchen.de"
  },
  credit: {
    product: "Konsumentenkredit / Ratenkredit",
    purpose: "Küchenrenovierung",
    creditLimit: 15000,
    term: 60,
    startDate: "05/2023",
    monthlyRate: 289,
    defaultRates: 2,
    daysPastDue: 46,
    outstanding: 1102
  }
};

const timelineEvents = [
  { date: "14.11.2025", type: "inbound", channel: "Email", content: "\"Ich habe bereits bezahlt.\"" },
  { date: "14.11.2025", type: "note", channel: "Agent Note", content: "Zahlungsbeleg angefordert" },
  { date: "13.11.2025", type: "outbound", channel: "WhatsApp", content: "Freundliche Erinnerung + Bitte um Rückmeldung" },
  { date: "10.11.2025", type: "outbound", channel: "Brief", content: "1. Mahnung versendet" },
];

const CustomerDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [reminderNote, setReminderNote] = useState("");
  const [aiPrompt, setAiPrompt] = useState("Bitte freundlich, aber klar. Biete Ratenplan (3 Monate) an und erwähne, dass wir bei Nachweis einer Zahlung den Vorgang sofort prüfen.");
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState("3x");
  const [sendEmailBefore, setSendEmailBefore] = useState(true);

  const aiGeneratedText = `Sehr geehrter Herr Berger,

wir beziehen uns auf Ihren Konsumentenkredit für die Küchenrenovierung und die derzeit offenen Raten in Höhe von €1.102,00.

Wir verstehen, dass unvorhergesehene Situationen auftreten können. Daher möchten wir Ihnen folgende Optionen anbieten:

• Ratenplan über 3 Monate: 3x €367,33/Monat
• Ratenplan über 6 Monate: 6x €183,67/Monat

Sollten Sie die Zahlung bereits getätigt haben, bitten wir Sie, uns den Zahlungsbeleg per E-Mail oder WhatsApp zuzusenden. Wir werden den Vorgang umgehend prüfen und die Angelegenheit klären.

Für einen Rückruf stehen wir Ihnen gerne zwischen 18:30 und 20:00 Uhr zur Verfügung.

Mit freundlichen Grüßen,
Ihr Inkasso-Team`;

  return (
    <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" onClick={() => navigate("/demo")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Kundenübersicht</h1>
                <p className="text-muted-foreground mt-1">
                  Fall: Konsumentenkredit – Rate nicht beglichen
                </p>
              </div>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                <AlertCircle className="w-3 h-3 mr-1" />
                Dispute: Zahlung behauptet (Beleg ausstehend)
              </Badge>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="outreach">Erreichbarkeit</TabsTrigger>
                <TabsTrigger value="reminders">Mahnungen</TabsTrigger>
                <TabsTrigger value="credits">Kredite & Sicherheiten</TabsTrigger>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="notes">Notizen</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Personal Info Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Persönliche Daten
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p className="font-medium">{customerData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Wohnort</p>
                          <p className="font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {customerData.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Alter</p>
                          <p className="font-medium">{customerData.age} Jahre</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Familienstand</p>
                          <p className="font-medium">{customerData.familyStatus}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Beruf</p>
                          <p className="font-medium flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            {customerData.profession}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Beschäftigt seit</p>
                          <p className="font-medium">{customerData.employedSince}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Nettoeinkommen</p>
                          <p className="font-medium">€{customerData.netIncome.toLocaleString("de-DE")}/Monat</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Schufa Score</p>
                          <p className="font-medium text-success">{customerData.schufaScore}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Info Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Kontaktdaten
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Telefon</p>
                            <p className="font-medium">{customerData.phone}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-1" />
                            Anrufen
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">E-Mail</p>
                            <p className="font-medium">{customerData.email}</p>
                          </div>
                          <Button size="sm" variant="outline">
                            <Mail className="w-4 h-4 mr-1" />
                            E-Mail
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Bevorzugter Kanal</p>
                            <Badge variant="secondary">{customerData.preferredChannel}</Badge>
                          </div>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <p className="text-sm font-medium mb-2">Gläubiger</p>
                        <p className="text-sm">{customerData.creditor}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {customerData.creditorContact.name} ({customerData.creditorContact.department})
                        </p>
                        <p className="text-sm text-muted-foreground">{customerData.creditorContact.phone}</p>
                        <p className="text-sm text-muted-foreground">{customerData.creditorContact.email}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Credit Background Card */}
                  <Card className="lg:col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Kredit-Hintergrund
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Produkt</p>
                          <p className="font-medium">{customerData.credit.product}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Zweck</p>
                          <p className="font-medium">{customerData.credit.purpose}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Kreditrahmen</p>
                          <p className="font-medium">€{customerData.credit.creditLimit.toLocaleString("de-DE")}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Laufzeit</p>
                          <p className="font-medium">{customerData.credit.term} Monate</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Start</p>
                          <p className="font-medium">{customerData.credit.startDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Monatsrate</p>
                          <p className="font-medium">€{customerData.credit.monthlyRate}/Monat</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Offene Raten</p>
                          <p className="font-medium text-destructive">{customerData.credit.defaultRates} Raten</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Tage überfällig</p>
                          <p className="font-medium text-destructive">{customerData.credit.daysPastDue} Tage</p>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                        <p className="text-sm text-muted-foreground">Offener Betrag (inkl. Verzugsgebühren)</p>
                        <p className="text-2xl font-bold text-destructive">€{customerData.credit.outstanding.toLocaleString("de-DE", { minimumFractionDigits: 2 })}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Outreach Tab - Module A */}
              <TabsContent value="outreach" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Erreichbarkeitsanalyse
                    </CardTitle>
                    <CardDescription>
                      Optimale Kontaktzeiten basierend auf Kundenverhalten
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Beste Erreichbarkeit</p>
                        <p className="text-lg font-semibold">Werktags 18:30–20:00</p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Nächster empfohlener Kontakt</p>
                        <p className="text-lg font-semibold">19.11.2025, 19:10</p>
                        <Badge variant="secondary" className="mt-1">WhatsApp</Badge>
                      </div>
                      <div className="p-4 bg-success/10 rounded-lg">
                        <p className="text-sm text-muted-foreground">Inkasso-Wahrscheinlichkeit</p>
                        <p className="text-lg font-semibold text-success">68%</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="font-medium mb-2">Analyse-Begründung:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Arbeitszeiten tagsüber → abends besser erreichbar</li>
                        <li>• WhatsApp als bevorzugter Kanal</li>
                        <li>• Schufa mittel-gut → eher lösungsorientiert</li>
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button>
                        <Calendar className="w-4 h-4 mr-2" />
                        Kontakt planen
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp starten
                      </Button>
                      <Button variant="outline">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt anrufen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reminders Tab - Module C */}
              <TabsContent value="reminders" className="space-y-6">
                {/* 1. Mahnung */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        1. Mahnung
                      </CardTitle>
                      <Badge className="bg-success/10 text-success">Versendet</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Versanddatum</p>
                        <p className="font-medium">10.11.2025</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Kanal</p>
                        <p className="font-medium">E-Mail + Brief</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4">
                      <FileText className="w-4 h-4 mr-1" />
                      Text ansehen
                    </Button>
                  </CardContent>
                </Card>

                {/* 2. Mahnung */}
                <Card className="border-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Send className="w-5 h-5 text-primary" />
                        2. Mahnung
                      </CardTitle>
                      <Badge variant="outline">Geplant</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Geplanter Versand</p>
                        <p className="font-medium">20.11.2025</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">System-Empfehlung</p>
                        <p className="text-xs">19.11.2025 19:10 WhatsApp</p>
                        <p className="text-xs">20.11.2025 09:15 E-Mail</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Checkbox 
                        checked={sendEmailBefore} 
                        onCheckedChange={(checked) => setSendEmailBefore(!!checked)}
                        id="sendBefore"
                      />
                      <label htmlFor="sendBefore" className="text-sm">
                        1 Tag vorher nochmal E-Mail senden
                      </label>
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium">Individuelle Notiz hinzufügen:</label>
                      <Input 
                        value={reminderNote}
                        onChange={(e) => setReminderNote(e.target.value)}
                        placeholder="z.B. Hinweis auf bereits erfolgte Rückfrage..."
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-sm font-medium">AI-Prompt für Textanpassung:</label>
                      <Textarea 
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        rows={3}
                      />
                      <Button variant="secondary" size="sm">
                        <Sparkles className="w-4 h-4 mr-1" />
                        AI Text generieren
                      </Button>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm font-medium mb-2">AI-generierter Text (Vorschau):</p>
                      <p className="text-sm whitespace-pre-wrap">{aiGeneratedText}</p>
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Nachricht bearbeiten
                      </Button>
                      <Button variant="outline">
                        Kanalvorschau
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 3. Mahnung */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        3. Mahnung
                      </CardTitle>
                      <Badge variant="secondary">Entwurf</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Entwurf vorhanden, noch nicht finalisiert.</p>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Bearbeiten
                      </Button>
                      <Button size="sm">
                        Finalisieren (Demo)
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Options - Module D */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Zahlungsoptionen
                    </CardTitle>
                    <CardDescription>
                      Empfohlene Zahlungsoptionen für den Schuldner
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div 
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPaymentPlan === "sofort" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedPaymentPlan("sofort")}
                      >
                        <p className="font-medium">Sofortzahlung</p>
                        <p className="text-2xl font-bold mt-2">€1.102,00</p>
                        <p className="text-xs text-muted-foreground mt-1">IBAN: DE89 3704 0044 0532 0130 00</p>
                        <p className="text-xs text-muted-foreground">Ref: INV-2024-001</p>
                      </div>
                      <div 
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPaymentPlan === "3x" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedPaymentPlan("3x")}
                      >
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Ratenplan 3x</p>
                          <Badge className="bg-success/10 text-success text-xs">Empfohlen</Badge>
                        </div>
                        <p className="text-2xl font-bold mt-2">€367,33/Monat</p>
                        <p className="text-xs text-muted-foreground mt-1">3 Monatsraten</p>
                      </div>
                      <div 
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedPaymentPlan === "6x" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedPaymentPlan("6x")}
                      >
                        <p className="font-medium">Ratenplan 6x</p>
                        <p className="text-2xl font-bold mt-2">€183,67/Monat</p>
                        <p className="text-xs text-muted-foreground mt-1">6 Monatsraten</p>
                      </div>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="font-medium">Option bei Dispute:</p>
                      <p className="text-sm text-muted-foreground">Stundung 14 Tage (nur wenn Zahlungsbeleg ausstehend)</p>
                    </div>
                    <Button>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Mit Schuldner bestätigen
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Credits & Collateral Tab - Module F */}
              <TabsContent value="credits" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Sicherheiten & Vermögensübersicht (Demo)
                    </CardTitle>
                    <CardDescription>
                      Geschätzte Vermögenswerte und Verbindlichkeiten
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Assets */}
                    <div>
                      <h4 className="font-semibold mb-3">Sicherheiten / Assets</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Car className="w-4 h-4" />
                            <span className="font-medium">Fahrzeug</span>
                          </div>
                          <p className="text-sm text-muted-foreground">VW Golf (2019)</p>
                          <p className="text-lg font-semibold text-success">~€12.500</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <PiggyBank className="w-4 h-4" />
                            <span className="font-medium">Sparkonto</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Geschätzt</p>
                          <p className="text-lg font-semibold text-success">~€4.000</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4" />
                            <span className="font-medium">Hausrat/Sonstige</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Optional</p>
                          <p className="text-lg font-semibold text-success">~€1.500</p>
                        </div>
                      </div>
                    </div>

                    {/* Liabilities */}
                    <div>
                      <h4 className="font-semibold mb-3">Weitere Verbindlichkeiten</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="font-medium">Autokredit</p>
                          <p className="text-sm text-muted-foreground">Rest: €2.800</p>
                          <p className="text-sm text-muted-foreground">Rate: €145/Monat</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="font-medium">Kreditkarte</p>
                          <p className="text-sm text-muted-foreground">Limit: €3.000</p>
                          <p className="text-sm text-muted-foreground">Genutzt: €900</p>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-lg">
                          <p className="font-medium">Sonstige</p>
                          <p className="text-sm text-muted-foreground">Keine weiteren bekannt</p>
                        </div>
                      </div>
                    </div>

                    {/* Affordability Snapshot */}
                    <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-4">Affordability Snapshot</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Nettoeinkommen</p>
                          <p className="text-xl font-bold">€3.200</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Fixkosten (Schätzung)</p>
                          <p className="text-xl font-bold text-destructive">-€2.350</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Frei verfügbar</p>
                          <p className="text-xl font-bold text-success">~€850</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Empfehlung</p>
                          <Badge className="bg-success/10 text-success mt-1">3-Monats-Plan realistisch</Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground italic">
                      Alle Werte sind Demo-Schätzungen.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Timeline Tab - Module B */}
              <TabsContent value="timeline" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Kontakt-Timeline
                    </CardTitle>
                    <CardDescription>
                      Alle Kontaktpunkte mit dem Kunden (Outlook Integration)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {timelineEvents.map((event, index) => (
                        <div key={index} className="flex gap-4 p-4 border rounded-lg">
                          <div className="flex-shrink-0">
                            {event.type === "inbound" && <Mail className="w-5 h-5 text-primary" />}
                            {event.type === "outbound" && <Send className="w-5 h-5 text-success" />}
                            {event.type === "note" && <FileText className="w-5 h-5 text-warning" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{event.date}</span>
                              <Badge variant="secondary" className="text-xs">{event.channel}</Badge>
                              {event.type === "inbound" && <Badge variant="outline" className="text-xs">Eingehend</Badge>}
                              {event.type === "outbound" && <Badge variant="outline" className="text-xs">Ausgehend</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground">{event.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notes Tab - Module E */}
              <TabsContent value="notes" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Fallnotizen & Dokumente
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Dokumente hochladen</h4>
                      <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Zahlungsbeleg (PDF/JPG) hier ablegen</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Datei auswählen
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Interne Notizen</h4>
                      <Textarea 
                        placeholder="Neue Notiz hinzufügen..."
                        rows={4}
                      />
                      <Button className="mt-2">
                        Notiz speichern
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Tags</h4>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className="bg-warning/10 text-warning">Dispute</Badge>
                        <Badge variant="outline" className="bg-success/10 text-success">Payment-plan-candidate</Badge>
                        <Badge variant="outline" className="bg-destructive/10 text-destructive">High-priority</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
  );
};

export default CustomerDetail;
