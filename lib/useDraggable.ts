import { useState, useRef, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DraggableItem {
  id: string;
  position: Position;
  isDragging: boolean;
}

interface UseDraggableProps {
  initialItems: Record<string, DraggableItem>;
  containerBounds?: {
    width: number;
    height: number;
  };
  onItemClick?: (itemId: string) => void;
}

export function useDraggable({
  initialItems,
  containerBounds = { width: 1200, height: 799 },
  onItemClick
}: UseDraggableProps) {
  const [items, setItems] = useState<Record<string, DraggableItem>>(initialItems);
  const dragStartRef = useRef<{ 
    x: number; 
    y: number; 
    itemId: string;
    startX: number;
    startY: number;
  }>({
    x: 0,
    y: 0,
    itemId: '',
    startX: 0,
    startY: 0,
  });

  const handleMouseDown = useCallback((e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    dragStartRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      itemId,
      startX: e.clientX,
      startY: e.clientY,
    };

    setItems(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], isDragging: true },
    }));
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragStartRef.current.itemId) return;

    const container = e.currentTarget.getBoundingClientRect();
    const newX = e.clientX - container.left - dragStartRef.current.x;
    const newY = e.clientY - container.top - dragStartRef.current.y;

    setItems(prev => ({
      ...prev,
      [dragStartRef.current.itemId]: {
        ...prev[dragStartRef.current.itemId],
        position: {
          x: Math.max(0, Math.min(newX, containerBounds.width - 100)),
          y: Math.max(0, Math.min(newY, containerBounds.height - 100)),
        },
      },
    }));
  }, [containerBounds]);

  const handleMouseUp = useCallback((e: React.MouseEvent) => {
    if (dragStartRef.current.itemId) {
      const itemId = dragStartRef.current.itemId;
      
      // Calculate the distance moved
      const deltaX = Math.abs(e.clientX - dragStartRef.current.startX);
      const deltaY = Math.abs(e.clientY - dragStartRef.current.startY);
      const dragThreshold = 5; // Minimum pixels to consider it a drag
      
      const wasDragged = deltaX > dragThreshold || deltaY > dragThreshold;

      setItems(prev => ({
        ...prev,
        [itemId]: {
          ...prev[itemId],
          isDragging: false,
        },
      }));

      // Only open modal if it was a click (not a drag)
      if (!wasDragged && onItemClick) {
        onItemClick(itemId);
      }

      dragStartRef.current = { x: 0, y: 0, itemId: '', startX: 0, startY: 0 };
    }
  }, [onItemClick]);

  return {
    items,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}
