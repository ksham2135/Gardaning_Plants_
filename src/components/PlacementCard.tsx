import { Compass, AlertTriangle } from 'lucide-react';

interface PlacementCardProps {
  window: string;
  avoidDirectSunlight: boolean;
}

const PlacementCard = ({ window: windowDir, avoidDirectSunlight }: PlacementCardProps) => (
  <div className="rounded-xl border border-border bg-card p-4 space-y-3">
    <h4 className="font-medium flex items-center gap-2">
      <Compass className="w-4 h-4 text-primary" />
      Indoor Placement
    </h4>
    <div className="space-y-2 text-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">Best Window</span>
        <span className="font-medium">{windowDir}-facing</span>
      </div>
      {avoidDirectSunlight && (
        <div className="flex items-center gap-2 text-medium">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm">Avoid direct sunlight</span>
        </div>
      )}
    </div>
  </div>
);

export default PlacementCard;
