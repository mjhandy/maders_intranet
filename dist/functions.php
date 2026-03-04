<?php
function vite_asset($entry) {
    $devServer = 'http://localhost:5173';
    $manifestPath = __DIR__ . '/assets/.vite/manifest.json';

    // Dev mode: load directly from Vite server
    if (is_dev_server_running($devServer)) {
        if (str_ends_with($entry, '.css')) return '';
        return '<script type="module" src="' . $devServer . $entry . '"></script>';
    }

    // Production mode: load from manifest
    if (!file_exists($manifestPath)) {
        throw new Exception('Manifest file not found. Run `npm run build`.');
    }

    $manifest = json_decode(file_get_contents($manifestPath), true);
    if (!isset($manifest[$entry])) {
        throw new Exception("Entry $entry not found in manifest.");
    }

    $html = '';
    if (isset($manifest[$entry]['css'])) {
        foreach ($manifest[$entry]['css'] as $css) {
            $html .= '<link rel="stylesheet" href="/assets/' . $css . '">';
        }
    }
    $html .= '<script type="module" src="/assets/' . $manifest[$entry]['file'] . '"></script>';
    return $html;
}

function is_dev_server_running($url) {
    $headers = @get_headers($url);
    return $headers && strpos($headers[0], '200') !== false;
}
