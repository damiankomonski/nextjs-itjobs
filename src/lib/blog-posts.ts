export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    content: string[];
};

export const blogPosts: BlogPost[] = [
    {
        slug: "jak-przygotowac-cv-do-it",
        title: "Jak przygotować CV do branży IT",
        excerpt: "Praktyczne wskazówki, jak ułożyć CV, które przejdzie screening rekrutera i ATS.",
        date: "5 lipca 2026",
        category: "Kariera",
        readTime: "6 min",
        content: [
            "Dobre CV w IT to nie lista wszystkich technologii, których kiedykolwiek dotknąłeś. Rekruter szuka dopasowania do roli — jasnego opisu doświadczenia, konkretnych projektów i wpływu Twojej pracy.",
            "Zacznij od krótkiego podsumowania (3–4 zdania): kim jesteś, w czym jesteś mocny i czego szukasz. Następnie doświadczenie — od najnowszego, z punktami zaczynającymi się od czasowników: „Zaprojektowałem”, „Wdrożyłem”, „Zoptymalizowałem”.",
            "Technologie wyróżnij osobno, ale nie przesadzaj. Lepiej pokazać 8–12 kluczowych narzędzi niż 40 pozycji bez kontekstu. Link do GitHuba lub portfolio warto dodać zawsze, jeśli masz sensowne projekty.",
        ],
    },
    {
        slug: "pytania-rekrutacyjne-frontend",
        title: "Najczęstsze pytania na rozmowie frontend",
        excerpt: "Od JavaScriptu po architekturę komponentów — co warto powtórzyć przed rozmową.",
        date: "28 czerwca 2026",
        category: "Frontend",
        readTime: "8 min",
        content: [
            "Na rozmowach frontendowych wracają te same tematy: zakres zmiennych, event loop, różnice między frameworkami, zarządzanie stanem i dostępność.",
            "Przygotuj się na pytania o Reacta: cykl życia komponentów, hooks, memoizacja, server vs client components w Next.js. Umiej wytłumaczyć, kiedy wybierzesz jedno rozwiązanie zamiast drugiego — to często ważniejsze niż definicje z pamięci.",
            "Na końcu warto mieć 2–3 pytania do firmy: o zespół, code review, proces wdrożeń i oczekiwania w pierwszych 3 miesiącach.",
        ],
    },
    {
        slug: "wynagrodzenie-w-it-2026",
        title: "Widełki wynagrodzeń w IT w 2026",
        excerpt: "Co wpływa na pensję developera i jak negocjować ofertę bez przesady.",
        date: "15 czerwca 2026",
        category: "Rynek pracy",
        readTime: "5 min",
        content: [
            "Wynagrodzenie zależy od roli, doświadczenia, miasta, modelu umowy (UoP vs B2B) i branży klienta. Senior z doświadczeniem w produkcie często negocjuje inaczej niż mid w software house.",
            "Przed rozmową sprawdź widełki w ogłoszeniach i u znajomych z podobnym profilem. Przygotuj argumenty: zakres odpowiedzialności, technologie, języki, doświadczenie w prowadzeniu projektów.",
            "Negocjuj cały pakiet: pensja, urlop, tryb pracy, budżet szkoleniowy, sprzęt. Czasem elastyczność jest warta więcej niż +500 zł netto.",
        ],
    },
];

export function getPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug);
}
