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
}

export function useDraggable({
  initialItems,
  containerBounds = { width: 1200, height: 799 }
}: UseDraggableProps) {
  const [items, setItems] = useState<Record<string, DraggableItem>>(initialItems);
  const dragStartRef = useRef<{ x: number; y: number; itemId: string }>({
    x: 0,
    y: 0,
    itemId: '',
  });

  const handleMouseDown = useCallback((e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    dragStartRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      itemId,
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

  const handleMouseUp = useCallback(() => {
    if (dragStartRef.current.itemId) {
      setItems(prev => ({
        ...prev,
        [dragStartRef.current.itemId]: {
          ...prev[dragStartRef.current.itemId],
          isDragging: false,
        },
      }));
      dragStartRef.current = { x: 0, y: 0, itemId: '' };
    }
  }, []);

  return {
    items,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}
