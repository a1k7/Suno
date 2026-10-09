"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Wordmark } from "./Wordmark";
const links = [["Our Vision", "vision"], ["Product", "product"], ["Principles", "principles"], ["Contact", "contact"]] as const;
export function Navbar() { const [open, setOpen] = useState(false); const close = () => setOpen(false); return <header className="nav"><nav className="shell" aria-label="Main navigation"><Wordmark /><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}<span className="sr-only">Menu</span></button><div className="navlinks">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}<a className="button button-small" href="#early-access">Get Early Access</a></div><div id="mobile-menu" className={`mobilelinks ${open ? "shown" : ""}`}>{links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={close}>{label}</a>)}<a className="button" href="#early-access" onClick={close}>Get Early Access</a></div></nav></header>; }
