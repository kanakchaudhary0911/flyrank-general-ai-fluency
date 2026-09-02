# DNS Walkthrough

## What is DNS?

DNS (Domain Name System) translates a human-readable website address into the information needed to locate the server hosting that website.

Instead of remembering a server address, users can type a domain such as:

`kanak-chaudhary.netlify.app`

DNS helps the browser discover where that website is hosted.

---

## What is a CNAME Record?

A CNAME (Canonical Name) record is a DNS record that points one domain name to another hostname.

For example, a subdomain can use a CNAME to point toward a hosting provider's hostname. The DNS system follows that hostname to determine where the request should be handled.

CNAME records are commonly used when connecting a custom domain or subdomain to a hosted website.

---

## What Happens When Someone Opens the Website?

When someone enters:

`https://kanak-chaudhary.netlify.app`

the following process takes place:

1. **Browser**
   - The browser receives the website address and needs to find where the domain is hosted.

2. **DNS Resolver**
   - The browser or operating system asks a DNS resolver to find the DNS information for the domain.
   - The resolver may already have the answer cached.

3. **Nameserver**
   - If the information is not cached, the resolver communicates with the appropriate DNS nameservers to find the records for the domain.

4. **DNS Record**
   - The resolver receives the relevant DNS information that identifies where the domain should be handled.

5. **Response**
   - The resolver returns the result to the user's device.

6. **Web Server / Hosting Platform**
   - The browser can now connect to the hosting platform serving the website.

7. **HTTPS Connection**
   - The browser establishes a secure HTTPS connection and requests the website files.

8. **Website Response**
   - The hosting platform returns the required HTML, CSS, JavaScript, and other assets.
   - The browser renders the website for the visitor.

---

## Simple Flow

```text
User enters website address
          ↓
       Browser
          ↓
    DNS Resolver
          ↓
      Nameserver
          ↓
     DNS Record
          ↓
 Hosting Platform
          ↓
    HTTPS Response
          ↓
      Web Page
```

---

> [!IMPORTANT]
> ## What I Learned
>
> - DNS acts as the naming and lookup system that helps connect a human-readable domain name with the infrastructure serving a website.
> - A CNAME is one type of DNS record that can point a hostname to another hostname, which is useful when connecting hosted services and domains.
> - For this assignment, the website is deployed on Netlify's free HTTPS domain. A custom domain is not required, but understanding DNS makes it possible to configure one correctly in the future.