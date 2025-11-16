import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, AlertTriangle, HelpCircle, Settings2 } from "lucide-react";

interface AIAgentCardProps {
  name: string;
  role: string;
  description: string;
  icon: "messenger" | "negotiator" | "enforcer" | "assistant";
  messagesSent: number;
  successRate: number;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  tone: number;
  empathy: number;
  assertiveness: number;
  onToneChange: (value: number[]) => void;
  onEmpathyChange: (value: number[]) => void;
  onAssertivenessChange: (value: number[]) => void;
}

const iconMap = {
  messenger: MessageSquare,
  negotiator: TrendingUp,
  enforcer: AlertTriangle,
  assistant: HelpCircle,
};

export const AIAgentCard = ({
  name,
  role,
  description,
  icon,
  messagesSent,
  successRate,
  enabled,
  onToggle,
  tone,
  empathy,
  assertiveness,
  onToneChange,
  onEmpathyChange,
  onAssertivenessChange,
}: AIAgentCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <Card className="p-6 bg-gradient-card border-border">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className={`p-3 rounded-lg ${enabled ? 'bg-primary/10' : 'bg-muted'}`}>
              <IconComponent className={`w-6 h-6 ${enabled ? 'text-primary' : 'text-muted-foreground'}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{name}</h3>
              <Badge variant="outline" className="mt-1">{role}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor={`${name}-toggle`} className="text-sm text-muted-foreground">
              {enabled ? 'Active' : 'Inactive'}
            </Label>
            <Switch
              id={`${name}-toggle`}
              checked={enabled}
              onCheckedChange={onToggle}
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Messages Sent</p>
            <p className="text-2xl font-bold text-foreground">{messagesSent.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Success Rate</p>
            <p className="text-2xl font-bold text-success">{successRate}%</p>
          </div>
        </div>

        {enabled && (
          <>
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Communication Tone</Label>
                  <span className="text-sm text-muted-foreground">{tone}%</span>
                </div>
                <Slider
                  value={[tone]}
                  onValueChange={onToneChange}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Casual</span>
                  <span>Professional</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Empathy Level</Label>
                  <span className="text-sm text-muted-foreground">{empathy}%</span>
                </div>
                <Slider
                  value={[empathy]}
                  onValueChange={onEmpathyChange}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm">Assertiveness</Label>
                  <span className="text-sm text-muted-foreground">{assertiveness}%</span>
                </div>
                <Slider
                  value={[assertiveness]}
                  onValueChange={onAssertivenessChange}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            <Button variant="outline" className="w-full" size="sm">
              <Settings2 className="w-4 h-4 mr-2" />
              Advanced Configuration
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};
