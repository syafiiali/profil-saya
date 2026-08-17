import { NextResponse } from 'next/server';

export async function GET() {
  const posts = [
    { 
      title: "Penerapan Machine Learning untuk Pemetaan Pertambangan", 
      link: "https://www.alisyafii.id/research/machine-learning-mining", 
      date: "Mon, 17 Aug 2026 00:00:00 GMT" 
    },
    { 
      title: "Penelitian Geopark Meratus", 
      link: "https://www.alisyafii.id/blog/geopark-meratus", 
      date: "Sat, 15 Aug 2026 00:00:00 GMT" 
    },
    { 
      title: "Eksplorasi Mineral Kalimantan", 
      link: "https://www.alisyafii.id/blog/eksplorasi-mineral", 
      date: "Sat, 01 Aug 2026 00:00:00 GMT" 
    }
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Berita Terbaru Ahmad Ali Syafii</title>
      <link>https://www.alisyafii.id</link>
      <description>Update penelitian dan berita dari alisyafii.id</description>
      ${posts.map(post => `
        <item>
          <title>${post.title}</title>
          <link>${post.link}</link>
          <pubDate>${post.date}</pubDate>
        </item>
      `).join('')}
    </channel>
  </rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}