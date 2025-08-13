import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImpactStyle } from "@capacitor/haptics";

interface ActionItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  action: () => void;
  color?: string;
  disabled?: boolean;
}

interface FloatingActionButtonProps {
  primaryActions: ActionItem[];
  secondaryActions?: ActionItem[];
  onActionTrigger?: (style?: ImpactStyle) => void;
  className?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  primaryActions,
  secondaryActions = [],
  onActionTrigger,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    setShowLabels(!isExpanded);
    onActionTrigger?.(ImpactStyle.Light);
  };

  const handleActionClick = (action: () => void) => {
    action();
    setIsExpanded(false);
    setShowLabels(false);
    onActionTrigger?.(ImpactStyle.Medium);
  };

  const allActions = [...primaryActions, ...secondaryActions];

  return (
    <div className={cn("relative", className)}>
      {/* Secondary actions (expanded state) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {allActions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0, 
                  y: 20,
                  transition: { delay: (allActions.length - index - 1) * 0.05 }
                }}
                className="flex items-center space-x-3"
              >
                {/* Action label */}
                <AnimatePresence>
                  {showLabels && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.2 }}
                      className="bg-background border border-border rounded-lg px-3 py-2 text-sm whitespace-nowrap shadow-lg"
                    >
                      {item.label}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    size="icon"
                    className={cn(
                      "w-12 h-12 rounded-full shadow-lg",
                      item.color || "bg-muted",
                      item.disabled && "opacity-50 cursor-not-allowed"
                    )}
                    onClick={() => !item.disabled && handleActionClick(item.action)}
                    disabled={item.disabled}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-primary shadow-lg"
          onClick={toggleExpanded}
        >
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? (
              <X className="h-6 w-6" />
            ) : (
              <Plus className="h-6 w-6" />
            )}
          </motion.div>
        </Button>

        {/* Pulse animation for attention */}
        {!isExpanded && primaryActions.length > 0 && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        )}
      </motion.div>

      {/* Long press context menu hint */}
      {!isExpanded && (
        <motion.div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 5, duration: 2 }}
        >
          Tap to expand
        </motion.div>
      )}
    </div>
  );
};

export default FloatingActionButton;