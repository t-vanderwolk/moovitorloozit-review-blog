## SEO

Always need the following
- Title
- Description
- Image

### Open Graph Protocol (OGP)
```html
<meta property="og:title" value="Moovit or Loozit" />

```

### Twitter Cards


## User Reviews

### Uhaul Moving Review
curl -v https://www.movinghelp.com/customerreviews/103495


```javascript
async function foo() {
    const response = await fetch('https://www.movinghelp.com/customerreviews/103495', { mode: 'no-cors' });
    console.log(response);
    if (response.ok) {
      throw new Error('Bad Status');
    }

    // const json = await response.json();
    const text = await response.text();
    console.log(text);
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
    const parser = new DOMParser();
    const dom = parser.parseFromString(text, 'text/html');
    console.log(dom);


    const reviewQuotes = dom.querySelectorAll('blockquote.customerReviews');
    console.info(reviewQuotes);

    for (const reviewQuote of reviewQuotes) {

    }

   /**
    *
      <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            The movers from Moove It or Lose it were phenomenal.  Two men arrived on time, worked incredibly hard the entire time they were here and saved my husband and I hours of work and stress.  I highly recommend this company.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Maria H. | Bakersfield, CA</p>
                                <p>(Reviewed on 10/29/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
    */ 
}
```

```shell
www.movinghelp.com:443


REQUEST

GET /customerreviews/103495 HTTP/1.1
Accept: */*
Origin: www.movinghelp.com

200 OK HTTP/1.1
Content-Type: text/html
Content-Length: ######

<!DOCTYPE html>....


*   Trying 75.98.48.204:443...
* Connected to www.movinghelp.com (75.98.48.204) port 443 (#0)
* ALPN: offers h2
* ALPN: offers http/1.1
*  CAfile: /etc/ssl/certs/ca-certificates.crt
*  CApath: /etc/ssl/certs
* TLSv1.0 (OUT), TLS header, Certificate Status (22):
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.2 (IN), TLS header, Certificate Status (22):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.2 (IN), TLS header, Finished (20):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Certificate (11):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Finished (20):
* TLSv1.2 (OUT), TLS header, Finished (20):
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
* TLSv1.3 (OUT), TLS handshake, Finished (20):
* SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
* ALPN: server accepted http/1.1
* Server certificate:
*  subject: CN=*.movinghelp.com
*  start date: Nov 16 00:00:00 2021 GMT
*  expire date: Nov 16 23:59:59 2022 GMT
*  subjectAltName: host "www.movinghelp.com" matched cert's "*.movinghelp.com"
*  issuer: C=GB; ST=Greater Manchester; L=Salford; O=Sectigo Limited; CN=Sectigo RSA Domain Validation Secure Server CA
*  SSL certificate verify ok.
* TLSv1.2 (OUT), TLS header, Supplemental data (23):
> GET /customerreviews/103495 HTTP/1.1
> Host: www.movinghelp.com
> User-Agent: curl/7.83.1
> Accept: */*
>
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
* old SSL session ID is stale, removing
* TLSv1.2 (IN), TLS header, Supplemental data (23):
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Mon, 31 Oct 2022 00:11:36 GMT
< Server: Microsoft-IIS/8.5
< RTSS: 1-2-103
< Cache-Control: private
< Content-Type: text/html; charset=utf-8
< X-AspNetMvc-Version: 5.2
< X-AspNet-Version: 4.0.30319
< X-Frame-Options: SAMEORIGIN
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Content-Security-Policy: default-src 'self' 'unsafe-inline' 'unsafe-eval' localhost: * https://stats.g.doubleclick.net https://www.google-analytics.com wss://localhost:44399 movinghelp.com movinghelpd.com cdnjs.cloudflare.com https://localhost pwctag.uhaul.com www.googletagmanager.com unpkg.com https://bing.com https://virtualearth.com pwc.uhaul.com maxcdn.bootstrapcdn.com data: media.uhaul.net  http://localhost:* beta.uhaul.com;
< Strict-Transport-Security: max-age=31536000
< Content-Length: 37711
< Set-Cookie: ASP.NET_SessionId=np4elxqiw1ur3ooro4xn0k4v; path=/; secure; HttpOnly; SameSite=Lax
< Set-Cookie: _customerId=c6b5bd80-5575-437e-998b-41d8cc3819b2; expires=Mon, 31-Oct-2022 07:00:00 GMT; path=/; secure; HttpOnly
< Set-Cookie: .uhaulloadbalancer013105=3576717899.1.58128536.2257915904; path=/; secure
< Vary: Accept-Encoding
<



<!DOCTYPE html>


<html class="no-js">
<head>
    <!-- Google Tag Manager -->
    <script>
            (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
            'gtm.start':
            new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            '//www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5VTQMF');
    </script>
    <!-- End Google Tag Manager -->

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1., user-scalable=no" />
    <meta name="apple-itunes-app" content="app-id=1481504252">


    <title>
        Customer Reviews - Moovitorloozit
    </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">


    <meta name="description" content="Read unedited customer reviews for Moovitorloozit. Instant moving quotes from moving companies. Relocating? Get help moving." />



    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="/Content/foundation-float.min.css" rel="stylesheet" type="text/css" />
    <link href="/Content/Styles/App.css" rel="stylesheet" type="text/css" />
    <link href="/Content/Styles/fullcalendar.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/core.min.js"></script>
    <link href="/Content/Styles/921959.css" rel="stylesheet" />

    <link rel="apple-touch-icon" href="/apple-touch-icon.png">


    <!--Google Recaptcha v2-->
    <script src="https://www.google.com/recaptcha/api.js">
    </script>
</head>
<body>
    <noscript>
        <iframe src="//www.googletagmanager.com/ns.html?id=GTM-5VTQMF"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>







    <div data-sticky-container class="show-for-mobile">
        <header class="navbar home-search" data-sticky data-options="marginTop:0;" style="width:100%">
            <div class="navbar-top-section">
                <div class="navbar-contain">
                    <div class="navbar-top">
                        <button data-navbar="primary" data-target="primary" class="text-left left navbar-button toggle-panel-menu"><i class="fa fa-bars"></i><i class="fa fa-times" style="display: none;"></i></button>
                        <div class="logo">
                            <a href="/">
                                <img src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/images/moving-help-powered-by-uhaul-logo.svg" width="317px" alt="u haul moving help logo">
                            </a>
                        </div>
                    </div>
                    <nav id="primary" data-navbar="" class="primary">
                        <ul>
                            <li><a href="/">Home</a></li>

                                <li class="header-resources-subheader"><a href="/login">Account</a></li>
                        <li class="header-resources resources-hover">
                            <div class="header-resources-subheader">Resources</div>
                            <div class="header-resources-dropdown">
                                <ul>
                                    <li><a href="/customersupport/contactus">Customer Support</a></li>
                                    <li><a href="/customersupport/faq">FAQ</a></li>
                                        <li><a href="https://www.movinghelp.com/move/services-offered/">Services Offered</a></li>
                                        <li><a href="https://www.movinghelp.com/move/types-of-moves/">Types of Moves</a></li>
                                        <li><a href="https://www.movinghelp.com/move/">Blog</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/order">Cart <i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</div>
<div data-sticky-container class="show-for-desktop">
    <header class="navbar home-search" data-sticky data-options="marginTop:0;" style="width:100%">
        <div class="navbar-top-section">
            <div class="navbar-contain">
                <div class="navbar-top">
                    <div class="logo">
                        <a href="/">
                            <img src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/images/moving-help-powered-by-uhaul-logo.svg" width="317px" alt="u haul moving help logo">
                        </a>
                    </div>
                </div>
                <nav id="primary" data-navbar="" class="primary">
                    <ul>
                        <li><a href="/">Home</a></li>

                            <li><a href="/login">Account</a></li>
                        <li class="header-resources resources-desktop-hover">
                            Resources
                            <span class="resources-desktop-toggles"><i class="fa fa-chevron-down"></i><i class="fa fa-chevron-up" style="display: none;"></i></span>
                            <div class="header-resources-dropdown" style="display: none;">
                                <ul>
                                    <li><a href="/customersupport/contactus">Customer Support</a></li>
                                    <li><a href="/customersupport/faq">FAQ</a></li>
                                        <li><a href="https://www.movinghelp.com/move/services-offered/">Services Offered</a></li>
                                        <li><a href="https://www.movinghelp.com/move/types-of-moves/">Types of Moves</a></li>
                                        <li><a href="https://www.movinghelp.com/move/">Blog</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="/order">Cart <i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</div>



<div class="wrapper">



<div>
    <div>
        <section>
            <div>
                <div class="row">
                    <div class="large-12 columns">
* TLSv1.2 (IN), TLS header, Supplemental data (23):
                        <h1><span class="blue">Customer </span><span class="orange">Reviews for Moovitorloozit</span></h1>
                    </div>
                </div>

                <div id="reviewList">


        <div class="row">


                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>

                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Ma Danica j C. | Puyallup, WA</p>
                                <p>(Reviewed on 10/30/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            The movers from Moove It or Lose it were phenomenal.  Two men arrived on time, worked incredibly hard the entire time they were here and saved my husband and I hours of work and stress.  I highly recommend this company.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Maria H. | Bakersfield, CA</p>
                                <p>(Reviewed on 10/29/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Very nice and helpful. Careful with belongings.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
* TLSv1.2 (IN), TLS header, Supplemental data (23):
                                <p class="noBottomMar">Leora H. | Fort Worth, TX</p>
                                <p>(Reviewed on 10/24/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
        </div>
        <div class="row">


                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            The guys were excellent.  I&#39;ve forgotten their names, but they were professional, quick, efficient, and pleasant.  Thank you for your excellent help. I will use them for my next move.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Natalie A. | Ogden, UT</p>
                                <p>(Reviewed on 10/21/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            This company was great.  Everything was excellent except it took an extra 4 days for my piano to be moved into my house (from the garage where they off-loaded it from the truck.  The guys were great at scheduling the secondary move of the piano, however, and were professional and prompt in executing the second piano move (from garage to house).  Despite the hiccups, I will use this company for my next PNW move.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                        <i class="fa fa-star-o" aria-hidden="true"></i>
                            <div class="reviewInfo">
                                <p class="noBottomMar">Natalie A. | Ogden, UT</p>
                                <p>(Reviewed on 10/21/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Will hire again!
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Tomm A. | Olympia, WA</p>
                                <p>(Reviewed on 10/20/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
        </div>
        <div class="row">


                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Absolutely Appreciate,
On time, got right to it, respectful and efficient.
Thanks
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Richard S. | Puyallup, WA</p>
                                <p>(Reviewed on 10/08/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Weren&#39;t completely sure they were going to show up as they never provided verbal confirmation, but their team showed up on time and were very helpful and professional.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                                        <div class="reviewInfo">
                                <p class="noBottomMar">Alan G. | Sacramento, CA</p>
                                <p>(Reviewed on 10/06/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Business provided 2 helpers on short notice. I placed the order online through I-haul around 1am requesting morning help. I received received a confirmation call around 8am. The  movers arrived in the morning and completed within the reserved time. They were courteous and followed direction well. Would definitely recommend them. A+
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Jeff A. | Centralia, WA</p>
                                <p>(Reviewed on 10/06/2022)</p>
                            </div>
* TLSv1.2 (IN), TLS header, Supplemental data (23):
                        </div>
                    </blockquote>
                </div>
        </div>
        <div class="row">


                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Moovitorloozit was able to assist with my unload request with only 2 days notice. They showed up on time and even called ahead to let me know they were on their way. Their team got my truck unloaded quickly and they were very careful with our furniture. I will definitely use them again for our future moving needs, and would highly recommend them.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Sera W. | Bremerton, WA</p>
                                <p>(Reviewed on 10/03/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>
                            Had a last minute job and the team was flexible to accommodate me at the end of the day. Weren&#39;t needed for long, would have just liked to pay a higher rate for the 30 minutes needed. But I understand, business is business.
                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Kelsea O. | Allenton, MI</p>
                                <p>(Reviewed on 10/02/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
                <div class="medium-4 columns end">
                    <blockquote class="customerReviews">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <p>

                        </p>
                        <div class="reviewStarReviews">

                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                    <div class="reviewInfo">
                                <p class="noBottomMar">Raymond R. | ABERDEEN, WA</p>
                                <p>(Reviewed on 09/24/2022)</p>
                            </div>
                        </div>
                    </blockquote>
                </div>
        </div>

                </div>



                    <div class="row">
                        <div class="large-6 right text-right columns">
                            <ul id="pagination" class="pagination navigation" role="navigation" aria-label="Pagination"></ul>
                        </div>
                    </div>
            </div>
        </section>
    </div>
</div>


</div>

    <footer>
        <div class="footer-poweredby offset-bottom-2">
            <div class="row">
                <div class="large-12 columns">
                    <a href="/">
                        <img src="/Content/Styles/img/uhaul-panel-horizontal.svg" alt="u haul moving help logo" class="logo">
                    </a>
                </div>
            </div>
        </div>
        <div class="row footer-links">
            <div class="large-5 medium-12 small-12 columns">
                <div class="row">
                    <div class="medium-6 small-12 columns">
                        <div class="footer-right-border">
                            <div class="offset-bottom-2 small-only-text-center">
                                <h3>Customer Support</h3>
                                <a href="/customersupport/contactus"><i class="fa fa-envelope" style="color: #F05123;"></i> Contact Us</a><br />
                            </div>
                            <div class="offset-bottom-2 hide-for-small-down">
                                <h3>Connect</h3>
                                <a href="https://www.movinghelper.com/#register">Become a Provider</a><br />
* TLSv1.2 (IN), TLS header, Supplemental data (23):
                                <a href="https://www.surveymonkey.com/r/MCJ9RGJ" target="_blank">Refer a Moving Helper</a><br />
                                <div class="footer-social-media offset-top-1">
                                    <a href="https://www.facebook.com/movinghelp/" target="_blank" rel="noopener"><i class="fa fa-facebook-square"></i></a>
                                    <a href="https://twitter.com/movinghelp?lang=en" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
                                    <a href="https://www.youtube.com/user/MovingHelpcom/videos" target="_blank" rel="noopener"><i class="fa fa-youtube-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="medium-6 small-12 columns">
                        <h3 class="footer-first-hlink footer-hlink"><a href="/customersupport/faq">FAQ<i class="fa fa-chevron-right"></i></a></h3>
                            <h3 class="footer-hlink"><a href="/account/signup">Sign Up<i class="fa fa-chevron-right"></i></a></h3>
                        <h3 class="footer-hlink"><a href="/movers">Services by State<i class="fa fa-chevron-right"></i></a></h3>
                    </div>
                </div>
            </div>
            <div class="large-7 medium-12 hide-for-small columns">
                <h3 class="footer-blog-link"><a href="https://www.movinghelp.com/move">Blog<i class="fa fa-chevron-right"></i></a></h3>
                <div class="row">
                    <div class="medium-6 columns">
                        <h4><a href="https://www.movinghelp.com/move/services-offered/">Services Offered<i class="fa fa-chevron-right"></i></a></h4>
                        <div style="width: 50%; float: left; padding-right: 15px;">
                            <a href="https://www.movinghelp.com/move/services-offered/loading-unloading/">Loading &amp; Unloading</a><br />
                            <a href="https://www.movinghelp.com/move/services-offered/packing-unpacking/">Packing &amp; Unpacking</a><br />
                            <a href="https://www.movinghelp.com/move/services-offered/piano-moving/">Piano Moving</a><br />
                            <a href="https://www.movinghelp.com/move/services-offered/gun-safe-moving/">Gun Safe Moving</a><br />
                            <a href="https://www.movinghelp.com/move/services-offered/cleaning/">Cleaning</a><br />
                            <a href="https://www.movinghelp.com/move/services-offered/u-box-containers/">U-Box Containers</a>
                        </div>
                        <div style="width: 50%; float: right;">
                            <a href="https://www.movinghelp.com/move/services-offered/safeload-coverage/"><img src="/Content/Styles/img/safeload-badge.svg" width="13px"> Safeload Coverage</a><br />
                            <a href="https://www.movinghelp.com/move/services-offered/moving-help-now/">MovingHelp<span>®</span> Now!</a>
                        </div>
                    </div>
                    <div class="medium-6 columns">
                        <h4><a href="https://www.movinghelp.com/move/types-of-moves/">Types of Moves <i class="fa fa-chevron-right"></i></a></h4>
                        <div style="width: 50%; float: left; padding-right: 15px;">
                            <a href="https://www.movinghelp.com/move/types-of-moves/local-moving/">Local Moving</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/long-distance-moving/">Long Distance Moving</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/full-service-moving/">Full Service Moving</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/storage-unit/">Storage Unit</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/storage-container/">Storage Container</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/military-moving/">Military Moving</a>
                        </div>
                        <div style="width: 50%; float: right;">
                            <a href="https://www.movinghelp.com/move/types-of-moves/apartment-moving/">Apartment Moving</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/office-moving/">Office Moving</a><br />
                            <a href="https://www.movinghelp.com/move/types-of-moves/college-moving/">College Moving</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-12 show-for-small columns orange-icons">
                <h3 class="footer-hlink footer-mobile-trigger">Blog <span style="float: right;"><i class="fa fa-plus"></i><i class="fa fa-minus" style="display: none;"></i></span></h3>
                <div style="border-bottom: 1px solid #ddd;" class="offset-bottom-2">
                    <div class="footer-mobile-blog-links" style="display: none;">
                        <div class="footer-mobile-subcategory">
                            <h4 class="footer-hlink footer-mobile-services-trigger">Services Offered <span style="float: right;"><i class="fa fa-plus"></i><i class="fa fa-minus" style="display: none;"></i></span></h4>
                            <div class="footer-mobile-services" style="display: none;">
                                <a href="https://www.movinghelp.com/move/services-offered/loading-unloading/">Loading &amp; Unloading</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/packing-unpacking/">Packing &amp; Unpacking</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/piano-moving/">Piano Moving</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/gun-safe-moving/">Gun Safe Moving</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/cleaning/">Cleaning</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/u-box-containers/">U-Box Containers</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/safeload-coverage/"><img src="/Content/Styles/img/safeload-badge.svg" width="13px"> Safeload Coverage</a><br />
                                <a href="https://www.movinghelp.com/move/services-offered/moving-help-now/">MovingHelp<span>®</span> Now!</a>
                            </div>
                        </div>
                        <div class="footer-mobile-subcategory">
                            <h4 class="footer-hlink footer-mobile-moves-trigger">Types of Moves <span style="float: right;"><i class="fa fa-plus"></i><i class="fa fa-minus" style="display: none;"></i></span></h4>
                            <div class="footer-mobile-moves" style="display: none;">
                                <a href="https://www.movinghelp.com/move/types-of-moves/local-moving/">Local Moving</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/long-distance-moving/">Long Distance Moving</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/full-service-moving/">Full Service Moving</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/storage-unit/">Storage Unit</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/storage-container/">Storage Container</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/military-moving/">Military Moving</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/apartment-moving/">Apartment Moving</a><br />
                                <a href="https://www.movinghelp.com/move/types-of-moves/office-moving/">Office Moving</a><br />
* TLSv1.2 (IN), TLS header, Supplemental data (23):
                                <a href="https://www.movinghelp.com/move/types-of-moves/college-moving/">College Moving</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-12 columns show-for-small small-only-text-center">
                <h3>Connect</h3>
                <a href="https://www.movinghelper.com/#register">Become a Provider</a><br />
                <a href="https://www.surveymonkey.com/r/MCJ9RGJ" target="_blank">Refer a Moving Helper</a><br />
                <div class="footer-social-media offset-top-1">
                    <a href="https://www.facebook.com/movinghelp/" target="_blank" rel="noopener"><i class="fa fa-facebook-square"></i></a>
                    <a href="https://twitter.com/movinghelp?lang=en" target="_blank" rel="noopener"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.youtube.com/user/MovingHelpcom/videos" target="_blank" rel="noopener"><i class="fa fa-youtube-play"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="row">
                <div class="large-12 columns small-only-text-center">
                    Copyright &copy; 2022 MovingHelp. All rights reserved.
                    <div class="footer-copyright-links">
                        <a href="/customersupport/privacynotice">Privacy</a> |
                        <a href="/customersupport/termsandconditions">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

<script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.0/jquery-migrate.min.js"></script>
<script type="text/javascript" src="https://www.bing.com/api/maps/mapcontrol?callback=RenderMap" async defer></script> <!-- this can have a number of configurations in the get params. typically I would use a callback=SomeMethod() to pre-load a map -->
<script src="/Scripts/foundation.min.js"></script>
<script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/jquery.validate.min.js"></script>
<script src="/Scripts/jquery.validate.unobtrusive.min.js"></script>
<script src="/Scripts/jquery.unobtrusive-ajax.min.js"></script>
<script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/additional-methods.min.js"></script>
<script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/moment.min.js"></script>
<script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/fullcalendar.min.js"></script>
<script src="/Scripts/jQuery.SimpleMask.min.js"></script>
<script src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/jquery-ui.min.js"></script>
<script src="/Scripts/app.js"></script>
<script src="/Scripts/jquery.creditCardValidator.js"></script>
<script type="text/javascript" src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/jquery.lazy.min.js"></script>
<script type="text/javascript" src="https://cdnep-uhaul-movinghelp-global-d-001.azureedge.net/mhcom/jquery.lazy.plugins.min.js"></script>

<script>
    $(document).foundation();
    /*navigation*/
    var defaultRangeValidator = $.validator.methods.range;
    $.validator.methods.range = function (value, element, param) {
        if (element.type === 'checkbox') {
            // if it's a checkbox return true if it is checked
            return element.checked;
        } else {
            // otherwise run the default validation function
            return defaultRangeValidator.call(this, value, element, param);
        }
    }

    $('h2.categories-small-down').on("click", function () {
        $('#movinghelp-faq').toggle();
        $(this).toggleClass('opened');
    });

    $(function () {
        $('.lazy').lazy();
    });

</script>


    <script type="text/javascript" src="/Scripts/jquery.twbsPagination.js"></script>
    <script type="text/javascript">
        $('#pagination').twbsPagination({
            totalPages: 6,
            visiblePages: 5,
            activeClass: 'current',
            nextClass: 'continueNext',
            onPageClick: function (event, page) {

                $.ajax({
                    url: '103495/page-' + page,
                    data: {
                        "pageNumber": page,
                        "serviceProviderId": 103495,
                    },
                    success: function (data) {
                        $("#reviewList").html(data);
                    }
                });
            }
        });
    </script>




</body>



</html>


```

### Google Businesses

### Maintain your own

