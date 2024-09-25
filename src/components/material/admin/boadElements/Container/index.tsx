import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { CircleDashedIcon } from 'lucide-react';

const Container = ({
  id,
  children,
  title,
  // description,
  onAddItem,
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'transition-all ease-in-out duration-700 w-full h-full p-4 bg-gray-50 border-2 border-gray-500 border-opacity-75 rounded-xl flex flex-col gap-y-4',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl">{title}</h1>
          <p className="text-gray-400 text-sm">{id}</p>
        </div>
        <button
          className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl cursor-grab"
          {...listeners}
        >
          <CircleDashedIcon className='h-4 w-4' />
        </button>
      </div>

      {children}
      <button onClick={onAddItem}>
        Add Question
      </button>
    </div>
  );
};

export default Container;