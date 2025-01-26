// CDN Fallback Handler
(function() {
    const cdnFallbacks = {
        imagesloaded: [
            '/js/lib/imagesloaded.pkgd.min.js',
            'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/imagesloaded/4.1.4/imagesloaded.pkgd.min.js',
            'https://cdn.jsdelivr.net/npm/imagesloaded@4.1.4/imagesloaded.pkgd.min.js'
        ],
        isotope: [
            '/js/lib/isotope.pkgd.min.js',
            'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/isotope-layout/3.0.6/isotope.pkgd.min.js',
            'https://cdn.jsdelivr.net/npm/isotope-layout@3.0.6/dist/isotope.pkgd.min.js'
        ],
        leaflet: [
            '/js/lib/leaflet.min.js',
            'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/leaflet/1.7.1/leaflet.js',
            'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.min.js'
        ],
        fuse: [
            '/js/lib/fuse.min.js',
            'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/fuse.js/6.4.6/fuse.min.js',
            'https://cdn.jsdelivr.net/npm/fuse.js@6.4.6/dist/fuse.min.js'
        ],
        jquery_mark: [
            '/js/lib/jquery.mark.min.js',
            'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/mark.js/8.11.1/jquery.mark.min.js',
            'https://cdn.jsdelivr.net/npm/mark.js@8.11.1/dist/jquery.mark.min.js'
        ]
    };

    function loadScript(src, callback) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        script.onerror = function() {
            console.warn('Failed to load script:', src);
            const nextSrc = getNextSource(src);
            if (nextSrc) {
                loadScript(nextSrc, callback);
            }
        };
        document.head.appendChild(script);
    }

    function getNextSource(currentSrc) {
        for (const [key, sources] of Object.entries(cdnFallbacks)) {
            const index = sources.indexOf(currentSrc);
            if (index !== -1 && index < sources.length - 1) {
                return sources[index + 1];
            }
        }
        return null;
    }

    // Load all required scripts with fallbacks
    Object.entries(cdnFallbacks).forEach(([key, sources]) => {
        loadScript(sources[0], function() {
            console.log(`Successfully loaded ${key}`);
        });
    });
})(); 