import * as RDialog from '@radix-ui/react-dialog';
import { Separator } from '@radix-ui/react-separator';
import { X as CloseIcon } from 'lucide-react';
import React, { FC, PropsWithChildren } from 'react';

import style from './style.module.scss';
interface DialogProps {
  title: string;
  description?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  title,
  description,
  children,
  open,
  onOpenChange,
}) => (
  <RDialog.Root open={open} onOpenChange={onOpenChange}>
    <RDialog.Portal>
      <RDialog.Overlay className={style.dialogOverlay} />
      <RDialog.Content className={style.dialogContent}>
        <RDialog.Title className={style.dialogTitle}>{title}</RDialog.Title>
        {description && (
          <RDialog.Description className={style.dialogDescription}>
            {description}
          </RDialog.Description>
        )}
        <Separator style={{ height: 24 }} />
        {children}
        <RDialog.Close asChild>
          <button className={style.closeButton} aria-label="Close">
            <CloseIcon />
          </button>
        </RDialog.Close>
      </RDialog.Content>
    </RDialog.Portal>
  </RDialog.Root>
);
