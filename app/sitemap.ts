import { MetadataRoute } from 'next';

export const dynamic = "force-static";
export const revalidate = false;
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kwiq.zippydigitalsolutions.in';

    const routes: { path: string; changeFreq: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
        { path: '', changeFreq: 'daily', priority: 1.0 },
        { path: '/features', changeFreq: 'weekly', priority: 0.9 },
        { path: '/compare', changeFreq: 'weekly', priority: 0.8 },
        { path: '/contact', changeFreq: 'monthly', priority: 0.7 },
        { path: '/resources', changeFreq: 'weekly', priority: 0.8 },
        { path: '/templates', changeFreq: 'weekly', priority: 0.8 },
        { path: '/expedition', changeFreq: 'monthly', priority: 0.6 },
        { path: '/funding', changeFreq: 'monthly', priority: 0.6 },
        { path: '/observatory', changeFreq: 'monthly', priority: 0.6 },
        { path: '/privacy', changeFreq: 'yearly', priority: 0.3 },
        { path: '/terms', changeFreq: 'yearly', priority: 0.3 },
    ];

    return routes.map(({ path, changeFreq, priority }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority,
    }));
}
