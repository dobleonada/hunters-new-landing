'use client'
export const CookieConsent = () => {
  if (process.env.NODE_ENV === 'development') return

  const banner = `
        <!-- Cookie Consent by TermsFeed https://www.TermsFeed.com -->
        <script type="text/javascript" src="https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js" charset="UTF-8"></script>
        <script type="text/javascript" charset="UTF-8">
        document.addEventListener('DOMContentLoaded', function () {
        cookieconsent.run({"notice_banner_type":"simple","consent_type":"express","palette":"dark","language":"es","page_load_consent_levels":["strictly-necessary"],"notice_banner_reject_button_hide":false,"preferences_center_close_button_hide":false,"page_refresh_confirmation_buttons":false,"website_privacy_policy_url":"https://huntercreativos.com/es/legal/politica-de-privacidad"});
        });
        </script>

        <!-- Google Analytics -->
        <!-- Google tag (gtag.js) -->
        <script type="text/plain" data-cookie-consent="tracking" async src="https://www.googletagmanager.com/gtag/js?id=G-VRDDBFWRTW"></script>
        <script type="text/plain" data-cookie-consent="tracking">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VRDDBFWRTW');
        </script>
        <!-- end of Google Analytics-->

        <noscript>Free cookie consent management tool by <a href="https://www.termsfeed.com/">TermsFeed</a></noscript>
    `
  return <div dangerouslySetInnerHTML={{ __html: banner }}></div>
}
