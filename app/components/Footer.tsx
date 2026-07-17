import Image from "next/image";
import Link from "next/link";
import { sharedData } from "./site-data";
import { CommunityButton } from "./CommunityButton";

export function CtaBanner({ resource = false }: { resource?: boolean }) {
  const { cta } = sharedData;
  return (
    <section className="cta-banner">
      <div className="cta-character">{cta.character}</div>
      <div><h2>{resource ? cta.resourcesTitle : cta.homeTitle}</h2><p>{cta.description}</p></div>
      <div className="cta-action"><CommunityButton /><small>{cta.tagline}</small></div>
    </section>
  );
}

export function Footer() {
  const { footer, navigation } = sharedData;
  if (!footer.visible) return null;
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        {footer.brandVisible ? (
          <div className="footer-brand">
            <Image alt={navigation.brandAlt} height={90} src="/assets/logo.png" width={190} />
            <p>{footer.brandText}</p>
            {footer.socialsVisible ? <div className="socials">{footer.socials.filter((item) => item.visible).map(({ icon: Icon, label, href }) => <Link aria-label={label} href={href} key={label}><Icon /></Link>)}</div> : null}
          </div>
        ) : null}
        {footer.columns.filter((column) => column.visible).map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.filter((link) => link.visible).map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
          </div>
        ))}
        {footer.contactVisible ? (
          <div className="footer-column">
            <h3>{footer.contactTitle}</h3>
            {footer.contacts.filter((item) => item.visible).map(({ icon: Icon, text, href }) => <Link href={href} key={text}><Icon size={15} />{text}</Link>)}
          </div>
        ) : null}
      </div>
      {footer.bottomVisible ? <div className="footer-bottom"><span>{footer.copyright}</span><span>{footer.madeWith}</span></div> : null}
    </footer>
  );
}
