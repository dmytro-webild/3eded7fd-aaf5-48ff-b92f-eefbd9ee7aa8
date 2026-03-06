"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Coffee, Star, Utensils, Heart, Calendar, Send, BookOpen, Mic2, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="mediumLarge"
      background="fluid"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="NEO Books & Coffee"
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Events", id: "events" },
            { name: "Contact", id: "contact" },
            { name: "Reserve", id: "#" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Hubli's Favorite Coffee & Book Lounge"
          description="A peaceful cafe where great coffee meets great books. Perfect for working, reading, and relaxing. Discover our cozy ambience, curated book collection, and specialty coffee selection."
          background={{ variant: "plain" }}
          kpis={[
            { value: "4.5★", label: "Google Rating" },
            { value: "200+", label: "Reviews" },
            { value: "Open Now", label: "Come Visit" },
          ]}
          enableKpiAnimation={true}
          tag="Welcome to NEO"
          tagIcon={Coffee}
          imageSrc="http://img.b2bpic.net/free-photo/woman-works-cafe-evening_1153-3549.jpg"
          imageAlt="NEO Books and Coffee cozy interior with warm lighting"
          mediaAnimation="slide-up"
          buttons={[
            { text: "Get Started", href: "#contact" },
            { text: "Reserve Table", href: "#contact" },
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Loved by Our Community"
          description="Join hundreds of coffee lovers and book enthusiasts who trust NEO as their favorite local hangout"
          tag="Highly Rated"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Best Coffee in Hubli",            "Cozy Book Cafe",            "Perfect Work Space",            "Amazing Community",            "Quality & Comfort"]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="A Home for Coffee Lovers & Book Readers"
          description={[
            "NEO Books and Coffee is more than just a cafe—it's a sanctuary for those who appreciate the finer things in life. We bring together the warmth of specialty coffee with the serenity of curated literature.",            "Our carefully designed space welcomes remote workers, students, readers, and anyone seeking a peaceful retreat. Every corner is thoughtfully arranged with comfortable seating, natural light, and a calm ambience that inspires creativity and connection.",            "We believe in quality over quantity—from our ethically sourced coffee beans to our thoughtfully selected book collection. Every visit to NEO is an invitation to slow down, savor the moment, and become part of our growing community."]}
          buttons={[
            { text: "View Our Menu", href: "#menu" },
            { text: "Learn More", href: "#" },
          ]}
          showBorder={true}
          useInvertedBackground={false}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Menu Highlights"
          description="Explore our selection of signature items loved by our regulars"
          tag="Popular Items"
          tagIcon={Utensils}
          products={[
            {
              id: "1",              name: "Affogato",              price: "₹150",              variant: "Vanilla Ice Cream & Espresso",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-glasses-with-ice-cream-coffee_23-2148349615.jpg",              imageAlt: "Affogato with espresso and ice cream"},
            {
              id: "2",              name: "Mushroom Pizza",              price: "₹280",              variant: "Fresh Vegetables & Cheese",              imageSrc: "http://img.b2bpic.net/free-photo/assorted-meat-pizza-with-jamon-olives_501050-772.jpg",              imageAlt: "Fresh baked mushroom pizza"},
            {
              id: "3",              name: "Creamy Mushroom Sandwich",              price: "₹180",              variant: "Grilled with Special Sauce",              imageSrc: "http://img.b2bpic.net/free-photo/turkey-sandwich-with-cranberry-sauce-thanksgiving-wooden-table_123827-35067.jpg",              imageAlt: "Gourmet mushroom sandwich"},
            {
              id: "4",              name: "Specialty Coffee",              price: "₹120-250",              variant: "Latte, Cappuccino, Cold Brew",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-various-hot-coffee_53876-146522.jpg",              imageAlt: "Our specialty coffee selection"},
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "View Full Menu", href: "#" },
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Why People Love NEO"
          description="Discover what makes us the heart of Hubli's coffee and book community"
          tag="Our Strengths"
          tagIcon={Heart}
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              title: "📚 Books + Coffee",              description: "Curated collection of books paired with premium specialty coffee. The perfect blend of literature and caffeine.",              imageSrc: "http://img.b2bpic.net/free-photo/girl-reading-book-floor_23-2148171443.jpg"},
            {
              id: 2,
              title: "💻 Work Friendly",              description: "High-speed WiFi, comfortable seating, and a quiet ambience designed for remote workers and students.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-coffee-shop-working-laptop_23-2148366698.jpg"},
            {
              id: 3,
              title: "☕ Specialty Coffee",              description: "Ethically sourced beans, expert baristas, and every cup crafted with care and precision.",              imageSrc: "http://img.b2bpic.net/free-photo/barista-work-coffee-shop_158595-2328.jpg"},
            {
              id: 4,
              title: "🌿 Calm Ambience",              description: "Thoughtfully designed space with warm lighting, natural elements, and peaceful vibes for ultimate relaxation.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-cafe-drinking-coffee-working-computer_1303-14730.jpg"},
          ]}
        />
      </div>

      <div id="events" data-section="events">
        <PricingCardTwo
          title="Events & Experiences"
          description="Join our community for special moments, meaningful conversations, and memorable gatherings"
          tag="Upcoming Events"
          tagIcon={Calendar}
          textboxLayout="default"
          useInvertedBackground={false}
          plans={[
            {
              id: "book-club",              badge: "Book Club Nights",              badgeIcon: BookOpen,
              price: "Free",              subtitle: "Literary discussions & community",              buttons: [
                { text: "Join Us", href: "#contact" },
                { text: "Learn More", href: "#" },
              ],
              features: [
                "Monthly literary discussions",                "Coffee & snacks included",                "Mix of classics & contemporary",                "Welcoming community atmosphere"],
            },
            {
              id: "poetry-night",              badge: "Poetry Nights",              badgeIcon: Mic2,
              price: "Free",              subtitle: "Open mic & literary performances",              buttons: [
                { text: "Reserve Spot", href: "#contact" },
                { text: "Details", href: "#" },
              ],
              features: [
                "Open mic sessions",                "Featured poets & performers",                "Intimate venue setting",                "Light refreshments"],
            },
            {
              id: "group-bookings",              badge: "Private Events",              badgeIcon: Users,
              price: "Custom",              subtitle: "Perfect for corporate & personal events",              buttons: [
                { text: "Host an Event", href: "#contact" },
                { text: "Pricing", href: "#" },
              ],
              features: [
                "Customizable menu options",                "Private space available",                "Event planning support",                "Flexible timing & capacity"],
            },
          ]}
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Reserve Your Table & Stay Updated"
          description="Have questions? Want to reserve a table? Or interested in hosting an event? Reach out to us directly or subscribe to our newsletter for exclusive updates and special offers."
          tagIcon={Send}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/burning-candle-table_140725-8115.jpg"
          imageAlt="NEO Books and Coffee welcoming ambience"
          mediaAnimation="slide-up"
          inputPlaceholder="Enter your email"
          buttonText="Reserve Now"
          termsText="We respect your privacy. Unsubscribe anytime. We'll only send updates about events and special offers."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#" },
                { label: "About Us", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Events", href: "#events" },
              ],
            },
            {
              title: "Visit Us",              items: [
                { label: "📍 Hubli, Karnataka", href: "https://maps.google.com" },
                { label: "📞 +91-9876-543-210", href: "tel:+919876543210" },
                { label: "📧 hello@neobooks.com", href: "mailto:hello@neobooks.com" },
                { label: "🕐 Mon-Sun: 8AM-10PM", href: "#" },
              ],
            },
            {
              title: "Follow Us",              items: [
                { label: "Instagram", href: "https://instagram.com/neobooks" },
                { label: "Facebook", href: "https://facebook.com/neobooks" },
                { label: "WhatsApp", href: "https://wa.me/919876543210" },
                { label: "Contact Us", href: "#contact" },
              ],
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Refund Policy", href: "#" },
                { label: "FAQ", href: "#" },
              ],
            },
          ]}
          bottomLeftText="© 2025 NEO Books and Coffee, Hubli. All rights reserved."
          bottomRightText="Made with ☕ & 📚"
        />
      </div>
    </ThemeProvider>
  );
}
