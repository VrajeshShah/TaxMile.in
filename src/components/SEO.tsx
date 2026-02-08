import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonicalUrl
}) => {
    const siteTitle = "TaxMile.in | Devang B. Shah & Co";
    const defaultDescription = "Devang B. Shah & Co (TaxMile.in) is a professional tax consultancy firm providing reliable solutions in Income Tax, GST, TDS, Accounting, and Business Registrations.";
    const defaultKeywords = "Tax Consultant, Income Tax, GST, TDS, Accounting, Business Registration, TaxMile, Devang B. Shah";
    const siteUrl = "https://taxmile.in";

    const fullTitle = title ? `${title} | TaxMile.in` : siteTitle;
    const fullDescription = description || defaultDescription;
    const fullKeywords = keywords || defaultKeywords;
    const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <meta name="keywords" content={fullKeywords} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={fullDescription} />
        </Helmet>
    );
};
