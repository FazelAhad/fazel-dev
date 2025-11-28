# Deployment Guide - Environment Variables

## Adding API Keys for Production (Vercel)

### Step-by-Step Instructions:

1. **Get your Resend API Key:**
   - Sign up at [https://resend.com](https://resend.com) if you haven't already
   - Go to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Create a new API key
   - Copy the key (it starts with `re_`)

2. **Add Environment Variables in Vercel:**
   
   **Option A: Via Vercel Dashboard (Recommended)**
   
   - Go to [https://vercel.com](https://vercel.com) and log in
   - Select your project
   - Click on **Settings** in the top navigation
   - Click on **Environment Variables** in the left sidebar
   - Add each variable one by one:
     
     **Variable 1:**
     - Name: `RESEND_API_KEY`
     - Value: `re_your_actual_api_key_here`
     - Environments: ✅ Production, ✅ Preview, ✅ Development
     - Click **Save**
     
     **Variable 2:**
     - Name: `CONTACT_EMAIL`
     - Value: `info@fazelahad.dev` (or your preferred email)
     - Environments: ✅ Production, ✅ Preview, ✅ Development
     - Click **Save**
     
     **Variable 3:**
     - Name: `RESEND_FROM_EMAIL`
     - Value: `onboarding@resend.dev` (for testing) or `contact@yourdomain.com` (for production with verified domain)
     - Environments: ✅ Production, ✅ Preview, ✅ Development
     - Click **Save**
   
   - After adding all variables, go to **Deployments** tab
   - Click the three dots (⋯) on the latest deployment
   - Click **Redeploy** to apply the new environment variables

   **Option B: Via Vercel CLI**
   
   ```bash
   # Install Vercel CLI if you haven't
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Link your project
   vercel link
   
   # Add environment variables
   vercel env add RESEND_API_KEY
   vercel env add CONTACT_EMAIL
   vercel env add RESEND_FROM_EMAIL
   
   # Redeploy
   vercel --prod
   ```

3. **Verify Domain in Resend (For Production):**
   - Go to [https://resend.com/domains](https://resend.com/domains)
   - Add and verify your domain
   - Once verified, update `RESEND_FROM_EMAIL` in Vercel to use your domain email
   - Example: If your domain is `fazel.dev`, use `contact@fazel.dev` or `noreply@fazel.dev`

4. **Test the Contact Form:**
   - Visit your deployed site
   - Go to the Contact page
   - Submit a test message
   - Check your email inbox for the message

## Security Best Practices

✅ **DO:**
- Add environment variables in Vercel dashboard
- Use different API keys for development and production if needed
- Keep your API keys secret and never commit them to Git
- Use verified domains for production emails

❌ **DON'T:**
- Commit `.env.local` to GitHub
- Hardcode API keys in your source code
- Share your API keys publicly
- Use unverified domains in production

## Troubleshooting

**Contact form not sending emails?**
- Check that all environment variables are set in Vercel
- Verify the API key is correct
- Check Vercel deployment logs for errors
- Make sure you've redeployed after adding environment variables

**Getting email errors?**
- Verify your domain in Resend (for production)
- Check that `RESEND_FROM_EMAIL` uses a verified domain
- For testing, use `onboarding@resend.dev` which is pre-verified

## Local Development

For local development, create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=info@fazelahad.dev
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Remember:** Add `.env.local` to `.gitignore` (it should already be there) to prevent committing secrets.

