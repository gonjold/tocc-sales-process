# Al Hendrickson Toyota Coconut Creek - Sales Training Portal

A modern Next.js 14 training portal for automotive sales excellence.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
ahtocc-training-portal/
├── app/                          # Next.js App Router pages
│   ├── (sections)/               # Main content sections
│   │   ├── glossary/             # Sales terminology
│   │   ├── road-to-sale/         # 10-step sales process
│   │   │   └── step/[stepNum]/   # Individual step pages
│   │   ├── skills/               # Training modules
│   │   │   ├── flashcards/       # Interactive flashcard practice
│   │   │   ├── objections/       # Objection handling
│   │   │   └── phone/            # Phone skills
│   │   ├── resources/            # Reference materials
│   │   │   ├── forms/            # Deal forms library
│   │   │   ├── programs/         # Toyota programs + PPP
│   │   │   └── scripts/          # Phone/follow-up scripts
│   │   └── building-value/       # Product knowledge
│   ├── globals.css               # Global styles + Tailwind
│   ├── layout.tsx                # Root layout with sidebar
│   └── page.tsx                  # Welcome/home page
├── components/
│   └── layout/
│       ├── Sidebar.tsx           # Navigation sidebar
│       └── Header.tsx            # Breadcrumb header
├── data/                         # Typed content data
│   ├── steps.ts                  # Road to Sale content
│   ├── glossary.ts               # Sales terms
│   ├── objections.ts             # Flashcard content
│   ├── products.ts               # Toyota programs + PPP
│   └── documents.ts              # Form/script references
├── lib/
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## 🎨 Design System

### Colors
- **Primary Red:** #EB0A1E (AHT brand red)
- **Navy:** #03215C (accent/stats)
- **Gray Scale:** Full range for UI elements
- **Semantic:** Success, Warning, Error, Info states

### Typography
- **Display:** Toyota Type (loaded from Firebase)
- **Body:** Inter (system fallback)

### Components
- Section Hero (dark gradient header)
- Step Cards (clickable navigation)
- Script Boxes (dialogue formatting)
- Info Boxes (tip, warning, danger, success)
- Flashcards (flip animation)
- Glossary Grid (term/definition pairs)

## 📱 Features

### Road to Sale (10 Steps)
Complete sales process with scripts, tips, and related documents for each step.

### Interactive Flashcards
- Category filtering (Price, Payment, Time, Trade, Trust)
- Shuffle mode
- Progress tracking
- Flip animation with pro tips

### Glossary
- Search functionality
- Category filters
- Highlighted search results

### Toyota Programs
- ToyotaCare
- Toyota Safety Sense 3.0
- Toyoguard Platinum
- TCUV (Certified Used)
- **Premium Protect Plus** ($6,500+ value)

### Document Libraries
- Forms Library with checklists
- Scripts Library (phone, follow-up)
- Direct links to Firebase-hosted PDFs

## 🔗 Firebase Integration

Documents are hosted on Firebase Storage:
```
https://firebasestorage.googleapis.com/v0/b/ahtocc-sales-training.firebasestorage.app/o/
```

Path structure:
- `forms/` - Deal documentation
- `scripts/` - Phone and follow-up scripts
- `toyota-programs/` - Program brochures

## 🚀 Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy!

Or use Netlify CLI:
```bash
npm run build
npx netlify deploy --prod --dir=out
```

## 📝 Adding Content

### New Glossary Term
Edit `data/glossary.ts`:
```typescript
{ term: 'New Term', definition: 'Definition here', category: 'sales' }
```

### New Objection/Flashcard
Edit `data/objections.ts`:
```typescript
{
  id: 'unique-id',
  category: 'price',
  objection: 'Customer objection text',
  response: 'Your response here',
  tips: ['Tip 1', 'Tip 2']
}
```

### New Road to Sale Content
Edit `data/steps.ts` - each step has sections, tips, and related docs.

## 🏢 Dealership Info

**Al Hendrickson Toyota Coconut Creek**
5201 W Sample Rd
Coconut Creek, FL 33073
(954) 972-1100

---

Built with ❤️ for sales excellence.
