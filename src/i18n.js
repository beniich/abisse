import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Welcome to Abisse",
            "dashboard": "Dashboard",
            "api": "API Hub",
            "marketplace": "Marketplace",
            "profile": "Profile",
            "connect": "Connect Wallet",
            "search": "Search...",
            "language": "Language"
        }
    },
    zh: {
        translation: {
            "welcome": "欢迎来到 Abisse",
            "dashboard": "仪表板",
            "api": "API 中心",
            "marketplace": "市场",
            "profile": "个人资料",
            "connect": "连接钱包",
            "search": "搜索...",
            "language": "语言"
        }
    },
    ja: {
        translation: {
            "welcome": "Abisseへようこそ",
            "dashboard": "ダッシュボード",
            "api": "APIハブ",
            "marketplace": "マーケットプレイス",
            "profile": "プロフィール",
            "connect": "ウォレット接続",
            "search": "検索...",
            "language": "言語"
        }
    },
    es: {
        translation: {
            "welcome": "Bienvenido a Abisse",
            "dashboard": "Panel",
            "api": "Centro API",
            "marketplace": "Mercado",
            "profile": "Perfil",
            "connect": "Conectar Billetera",
            "search": "Buscar...",
            "language": "Idioma"
        }
    },
    de: {
        translation: {
            "welcome": "Willkommen bei Abisse",
            "dashboard": "Instrumententafel",
            "api": "API-Hub",
            "marketplace": "Marktplatz",
            "profile": "Profil",
            "connect": "Wallet verbinden",
            "search": "Suchen...",
            "language": "Sprache"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
