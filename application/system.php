<?php
function getClientIP(): string {
    return $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN';
}

function getCountry($ip): string {
    $url = "http://ip-api.com/json/".$ip."?lang=en&fields=country";

    try {
        $stream = file_get_contents($url);
        $data = json_decode($stream, true);
        return isset($data["country"]) ? strtoupper($data["country"]) : "UNKNOWN";
    } catch (Exception $exception) {
        return "Unknown";
    }
}

function getUserLanguage():string {
    $lang = 'en';
    if (strtolower(getCountry(getClientIP())) == 'germany') {
        $lang = 'de';
    }
    return $lang;
}