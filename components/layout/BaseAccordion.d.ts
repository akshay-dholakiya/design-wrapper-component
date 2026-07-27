import * as React from 'react';

export interface BaseAccordionItem {
  id: string;
  header: React.ReactNode;
  actions?: React.ReactNode;
  body: React.ReactNode;
}

export interface BaseAccordionProps {
  items?: BaseAccordionItem[];
  openId?: string | null;
  onToggle?: (id: string) => void;
}

declare const BaseAccordion: React.FC<BaseAccordionProps>;
export default BaseAccordion;
