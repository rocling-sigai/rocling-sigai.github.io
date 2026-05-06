// styles.js
const tailwindStyles = `
@layer components {
    /* 基礎佈局容器 */
    .main-container {
        @apply w-full max-w-[1280px] mx-auto px-6;
    }

    /* 導覽列連結 */
    .nav-link {
        @apply text-slate-700 dark:text-slate-300 font-medium hover:text-brand-blue-dark transition-colors;
    }

    /* 區塊標頭 */
    .section-header {
        @apply flex flex-col gap-4 mb-16 border-l-4 pl-6;
    }

    /* 任務卡片 */
    .content-card {
        @apply bg-white border border-slate-200 rounded-xl p-md flex flex-col gap-md hover:shadow-lg transition-shadow duration-300 w-full;
    }

    .card-badge {
        @apply flex items-center gap-2 bg-brand-teal/20 text-brand-dark px-4 py-2 rounded-lg w-fit border border-brand-teal/40 font-bold;
    }

    /* 召集人卡片 */
    .convener-card {
        @apply bg-white p-8 rounded-xl shadow-sm border border-brand-teal/40 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow;
    }

    .convener-icon-wrap {
        @apply w-16 h-16 rounded-full flex items-center justify-center mb-2;
    }

    /* 按鈕樣式 */
    .btn-primary {
        @apply bg-brand-blue-dark text-white px-8 py-3 rounded-lg font-label-sm hover:bg-brand-blue-light transition-all shadow-sm flex items-center gap-2;
    }

    .btn-outline {
        @apply border-2 border-brand-teal text-brand-dark px-8 py-3 rounded-lg font-label-sm hover:bg-brand-teal/20 transition-all flex items-center gap-2;
    }

    /* 圖示設定 */
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    .tag-badge {
        @apply bg-brand-blue-light/10 text-brand-blue-dark px-3 py-1 rounded text-xs border border-brand-blue-light/20 font-bold;
    }
    .card-footer { @apply mt-auto pt-3 border-t border-slate-100 flex flex-col gap-3; }
    .card-meta   { @apply flex items-center gap-3 text-slate-600 text-base; }
    .card-title   { @apply text-[23px]; }
    .card-subtitle   { @apply text-[20px]; }
    .web-link { @apply underline;}
}
`;

const styleTag = document.createElement('style');
styleTag.setAttribute('type', 'text/tailwindcss');
styleTag.innerHTML = tailwindStyles;
document.head.appendChild(styleTag);