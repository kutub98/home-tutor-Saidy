import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

type ToolTipProps = {
  toolTipName: string;
  toolTipTrigger: React.ReactNode; // Accepts any valid React node for the trigger
};

export default function ToolTip({ toolTipName, toolTipTrigger }: ToolTipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{toolTipTrigger}</TooltipTrigger>
        <TooltipContent className="z-[999] text-white primaryBg">
          {toolTipName}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
