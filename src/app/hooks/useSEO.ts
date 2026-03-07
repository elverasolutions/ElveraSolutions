import { useEffect } from "react";
import { useLocation } from "react-router";

export function useSEO(title: string, description: string) {
    const location = useLocation();

    useEffect(() => {
        // Set page title
        document.title = title;

        // Set meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Set canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        const baseUrl = window.location.origin;
        canonical.setAttribute('href', `${baseUrl}${location.pathname}`);

        // Set Open Graph tags
        const ogData = {
            'og:title': title,
            'og:description': description,
            'og:type': 'website',
            'og:url': `${baseUrl}${location.pathname}`,
            'og:image': `${baseUrl}/og-image.png`,
            'og:site_name': 'Elvera Solutions',
            'twitter:card': 'summary_large_image',
            'twitter:title': title,
            'twitter:description': description,
            'twitter:image': `${baseUrl}/og-image.png`,
        };

        Object.entries(ogData).forEach(([name, content]) => {
            let tag = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
            if (!tag) {
                tag = document.createElement('meta');
                tag.setAttribute(name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name', name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        });
    }, [title, description, location.pathname]);
}
