"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CalendarClock, CircleCheckBig, CircleHelp, ExternalLink, Link2, MessageCircleMore } from "lucide-react";
import { sharedData } from "../site-data";
import { Button } from "../ui/Button";
import { ModalShell } from "./ModalShell";

type ModalName = "community" | "exam" | "confirm" | "success" | null;
type ModalContextValue = {
  openCommunity: () => void;
  openExam: () => void;
  openConfirm: () => void;
  openSuccess: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useSiteModal() {
  const value = useContext(ModalContext);
  if (!value) throw new Error("useSiteModal must be used inside ModalProvider");
  return value;
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const { modals } = sharedData;
  const [modal, setModal] = useState<ModalName>(null);
  const close = () => setModal(null);
  const value = {
    openCommunity: () => setModal("community"),
    openExam: () => setModal("exam"),
    openConfirm: () => setModal("confirm"),
    openSuccess: () => setModal("success"),
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal === "exam" ? (
        <ModalShell label={modals.exam.label} onClose={close}>
          <div className="modal-content">
            <div className="modal-icon modal-icon-red"><CalendarClock /></div>
            <h3 className="text-red">{modals.exam.title}</h3>
            <p>{modals.exam.schedulePrefix} <strong className="pill-red">{modals.exam.day}</strong></p>
            <p>{modals.exam.scheduleSuffix}</p>
            <div className="modal-callout">
              <Link2 />
              <div>
                <p>{modals.exam.callout}</p>
                <Button>{modals.exam.primaryButton}<ExternalLink size={15} /></Button>
              </div>
            </div>
            <Button variant="outline" onClick={close}>{modals.exam.closeButton}</Button>
            <small><CircleHelp size={16} /><b>Note:</b>{modals.exam.note}</small>
          </div>
        </ModalShell>
      ) : null}
      {modal === "community" ? (
        <ModalShell label={modals.community.label} onClose={close}>
          <div className="modal-content">
            <div className="modal-icon modal-icon-green"><MessageCircleMore /></div>
            <h3 className="text-green">{modals.community.title}</h3>
            <p>{modals.community.description}</p>
            <Button variant="green"><MessageCircleMore size={18} />{modals.community.primaryButton}</Button>
            <Button variant="outline" onClick={close}>{modals.community.secondaryButton}</Button>
          </div>
        </ModalShell>
      ) : null}
      {modal === "confirm" ? (
        <ModalShell label={modals.confirm.label} onClose={close}>
          <div className="modal-content">
            <div className="modal-icon modal-icon-amber">!</div>
            <h3>{modals.confirm.title}</h3>
            <p>{modals.confirm.description}</p>
            <div className="modal-actions">
              <Button variant="outline" onClick={close}>{modals.confirm.cancelButton}</Button>
              <Button className="button-amber" onClick={() => setModal("success")}>{modals.confirm.confirmButton}</Button>
            </div>
          </div>
        </ModalShell>
      ) : null}
      {modal === "success" ? (
        <ModalShell label={modals.success.label} onClose={close}>
          <div className="modal-content">
            <div className="modal-icon modal-icon-green"><CircleCheckBig /></div>
            <h3 className="text-green">{modals.success.title}</h3>
            <p>{modals.success.description}</p>
            <Button variant="green" onClick={close}>{modals.success.button}</Button>
          </div>
        </ModalShell>
      ) : null}
    </ModalContext.Provider>
  );
}
