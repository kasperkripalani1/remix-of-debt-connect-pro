import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Bot, Wand2, MessageSquare, TrendingUp, Settings2, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIBotConfig = () => {
  const { toast } = useToast();
  const [tone, setTone] = useState("professional");
  const [formality, setFormality] = useState([70]);
  const [empathy, setEmpathy] = useState([60]);
  const [assertiveness, setAssertiveness] = useState([50]);
  const [enableMultiChannel, setEnableMultiChannel] = useState(true);
  const [enableEscalation, setEnableEscalation] = useState(true);

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "AI bot configuration has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">AI Outreach Bot</h1>
            <p className="text-muted-foreground">
              Configure your AI-powered debt collection assistant to match your brand voice and customer approach
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Messages Sent Today</p>
                  <p className="text-3xl font-bold text-foreground">1,247</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-sm text-success">+18% vs yesterday</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Response Rate</p>
                  <p className="text-3xl font-bold text-foreground">34.2%</p>
                </div>
                <div className="p-3 rounded-lg bg-success/10">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
              <p className="text-sm text-success">+5.3% this week</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Response Time</p>
                  <p className="text-3xl font-bold text-foreground">2.4m</p>
                </div>
                <div className="p-3 rounded-lg bg-accent/10">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Instant replies</p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Conversations</p>
                  <p className="text-3xl font-bold text-foreground">89</p>
                </div>
                <div className="p-3 rounded-lg bg-warning/10">
                  <Bot className="w-6 h-6 text-warning" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Ongoing</p>
            </Card>
          </div>

          <Tabs defaultValue="personality" className="w-full">
            <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-card border border-border">
              <TabsTrigger value="personality" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
                <Wand2 className="w-4 h-4 mr-2" />
                Personality
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
                <MessageSquare className="w-4 h-4 mr-2" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="rules" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
                <Settings2 className="w-4 h-4 mr-2" />
                Rules & Logic
              </TabsTrigger>
              <TabsTrigger value="channels" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
                <Zap className="w-4 h-4 mr-2" />
                Channels
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personality" className="mt-6 space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Bot Personality & Communication Style</h3>
                <p className="text-muted-foreground mb-6">
                  Adjust how the AI bot communicates with your customers to match your brand voice
                </p>

                <div className="space-y-8">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold">Communication Tone</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional & Formal</SelectItem>
                        <SelectItem value="friendly">Friendly & Approachable</SelectItem>
                        <SelectItem value="empathetic">Empathetic & Understanding</SelectItem>
                        <SelectItem value="direct">Direct & Straightforward</SelectItem>
                        <SelectItem value="conversational">Conversational & Casual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-base">Formality Level</Label>
                        <Badge variant="outline">{formality[0]}%</Badge>
                      </div>
                      <Slider
                        value={formality}
                        onValueChange={setFormality}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Casual</span>
                        <span>Very Formal</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-base">Empathy & Understanding</Label>
                        <Badge variant="outline">{empathy[0]}%</Badge>
                      </div>
                      <Slider
                        value={empathy}
                        onValueChange={setEmpathy}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Transactional</span>
                        <span>Highly Empathetic</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-base">Assertiveness</Label>
                        <Badge variant="outline">{assertiveness[0]}%</Badge>
                      </div>
                      <Slider
                        value={assertiveness}
                        onValueChange={setAssertiveness}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Gentle</span>
                        <span>Firm & Direct</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Language Preferences</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Primary Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="it">Italian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Fallback Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 p-3 rounded-lg bg-card border border-border">
                  <div>
                    <p className="font-medium text-foreground">Auto-detect customer language</p>
                    <p className="text-sm text-muted-foreground">Bot adapts to customer's language automatically</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="mt-6 space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Message Templates</h3>
                <p className="text-muted-foreground mb-6">
                  Customize the messages your AI bot sends at different stages of the collection process
                </p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-base font-semibold">Initial Contact Message</Label>
                    <Textarea
                      className="min-h-[120px]"
                      defaultValue="Hello [Customer Name], this is a friendly reminder from [Company Name] regarding your outstanding invoice [Invoice Number] for $[Amount]. We understand that circumstances can change, and we're here to work with you. Would you be available to discuss payment options?"
                    />
                    <p className="text-xs text-muted-foreground">
                      Available variables: [Customer Name], [Company Name], [Invoice Number], [Amount], [Due Date]
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold">Follow-up Message (7 days)</Label>
                    <Textarea
                      className="min-h-[120px]"
                      defaultValue="Hi [Customer Name], we wanted to follow up on our previous message about invoice [Invoice Number]. We're committed to finding a solution that works for both of us. Can we schedule a brief call to discuss payment arrangements?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold">Payment Received Message</Label>
                    <Textarea
                      className="min-h-[120px]"
                      defaultValue="Thank you [Customer Name]! We've received your payment of $[Amount]. Your account is now current. We appreciate your business and prompt attention to this matter."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-semibold">Payment Plan Offer</Label>
                    <Textarea
                      className="min-h-[120px]"
                      defaultValue="We understand you may be facing financial challenges. We'd like to offer a payment plan for your outstanding balance of $[Amount]. We can break this into [X] monthly installments. Would this help you?"
                    />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="rules" className="mt-6 space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Automation Rules & Logic</h3>
                <p className="text-muted-foreground mb-6">
                  Define when and how the AI bot engages with customers
                </p>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                      <div>
                        <p className="font-semibold text-foreground">Enable Auto-Escalation</p>
                        <p className="text-sm text-muted-foreground">Escalate to human after 3 failed contact attempts</p>
                      </div>
                      <Switch checked={enableEscalation} onCheckedChange={setEnableEscalation} />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                      <div>
                        <p className="font-semibold text-foreground">Multi-Channel Outreach</p>
                        <p className="text-sm text-muted-foreground">Try email, SMS, then phone in sequence</p>
                      </div>
                      <Switch checked={enableMultiChannel} onCheckedChange={setEnableMultiChannel} />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                      <div>
                        <p className="font-semibold text-foreground">Respect Quiet Hours</p>
                        <p className="text-sm text-muted-foreground">No outreach between 9 PM - 8 AM</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
                      <div>
                        <p className="font-semibold text-foreground">Payment Plan Auto-Offer</p>
                        <p className="text-sm text-muted-foreground">Automatically suggest payment plans for debts over $1,000</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Contact Frequency Cap</Label>
                      <Select defaultValue="3">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 time per week</SelectItem>
                          <SelectItem value="2">2 times per week</SelectItem>
                          <SelectItem value="3">3 times per week</SelectItem>
                          <SelectItem value="5">5 times per week</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Days Until First Contact</Label>
                      <Input type="number" defaultValue="3" min="0" max="30" />
                      <p className="text-xs text-muted-foreground">Days after due date</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Customer Segmentation</h3>
                <p className="text-muted-foreground mb-4">
                  Apply different bot behaviors based on customer characteristics
                </p>
                <div className="space-y-3">
                  {[
                    { segment: "High-Value Customers (>$50K)", approach: "More empathetic, personal touch" },
                    { segment: "Repeat Customers", approach: "Friendly, relationship-focused" },
                    { segment: "First-Time Overdue", approach: "Educational, helpful tone" },
                    { segment: "Chronic Late Payers", approach: "Firm but fair approach" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
                      <div>
                        <p className="font-medium text-foreground">{item.segment}</p>
                        <p className="text-sm text-muted-foreground">{item.approach}</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="channels" className="mt-6 space-y-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">Communication Channels</h3>
                <p className="text-muted-foreground mb-6">
                  Configure which channels the AI bot uses to reach customers
                </p>

                <div className="space-y-4">
                  {[
                    { 
                      channel: "Email", 
                      description: "Primary channel for detailed communications", 
                      enabled: true,
                      stats: "89% delivery rate"
                    },
                    { 
                      channel: "SMS", 
                      description: "Quick reminders and urgent messages", 
                      enabled: true,
                      stats: "94% open rate"
                    },
                    { 
                      channel: "WhatsApp", 
                      description: "Conversational outreach for international customers", 
                      enabled: false,
                      stats: "Connect to enable"
                    },
                    { 
                      channel: "Voice Calls", 
                      description: "AI voice bot for phone outreach", 
                      enabled: false,
                      stats: "Premium feature"
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between p-4 rounded-lg bg-card border border-border">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <p className="font-semibold text-foreground">{item.channel}</p>
                          {item.enabled && (
                            <Badge className="bg-success/10 text-success">Active</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <p className="text-xs text-muted-foreground">{item.stats}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch checked={item.enabled} />
                        <Button variant="ghost" size="sm">Settings</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Channel Priority & Timing</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Outreach Sequence</Label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">1</span>
                        <span className="text-foreground">Email (Day 0)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">2</span>
                        <span className="text-foreground">SMS (Day 3 if no response)</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">3</span>
                        <span className="text-foreground">Email Follow-up (Day 7)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-3">
            <Button variant="outline">Reset to Defaults</Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={handleSave}>
              <Bot className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIBotConfig;
