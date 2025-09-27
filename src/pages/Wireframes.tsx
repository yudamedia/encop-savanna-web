import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileImage } from 'lucide-react';

const wireframes = [
  {
    id: 'homepage',
    title: 'Homepage Structure',
    description: 'Main landing page with hero slideshow, welcome section, and accommodation preview',
    mermaidCode: `graph TD
    A[Header/Navigation] --> B[Logo]
    A --> C[Nav Links: Home, Experiences, Accommodation, Conservation, Culture, Contact]
    A --> D[Book Now Button]
    
    E[Homepage] --> F[Hero Slideshow]
    F --> G[Slide 1: Amboseli Sunrise]
    F --> H[Slide 2: Elephants at Watering Hole]
    F --> I[Slide 3: Stargazing Experience]
    
    E --> J[Welcome Section]
    J --> K[Image: Maasai Culture]
    J --> L[Philosophy Cards: Regenerative, Authentic, Community]
    J --> M[Statistics: Conservation Impact]
    
    E --> N[Accommodation Preview]
    N --> O[Luxury Villa Card]
    N --> P[Premium Tent Card]
    N --> Q[Eco Lodge Card]
    
    E --> R[Footer]
    R --> S[Contact Info]
    R --> T[Social Links]
    R --> U[Copyright]`
  },
  {
    id: 'experiences',
    title: 'Experiences Page',
    description: 'Curated safari experiences with detailed cards and booking options',
    mermaidCode: `graph TD
    A[Experiences Page] --> B[Hero Section]
    B --> C[Title: Curated Safari Experiences]
    B --> D[Subtitle: Immersive Adventures]
    
    A --> E[Experience Cards Grid]
    E --> F[Game Drive Experience]
    E --> G[Cultural Immersion]
    E --> H[Stargazing Safari]
    E --> I[Conservation Tour]
    E --> J[Photography Workshop]
    E --> K[Maasai Village Visit]
    
    L[Each Experience Card] --> M[Hero Image]
    L --> N[Title & Description]
    L --> O[Duration & Difficulty]
    L --> P[Price & Highlights]
    L --> Q[Book Now Button]
    
    A --> R[Conservation Message Section]
    R --> S[Supporting Conservation Text]
    R --> T[Impact Statistics]`
  },
  {
    id: 'accommodation',
    title: 'Accommodation Page',
    description: 'Safari accommodation options with amenities and booking details',
    mermaidCode: `graph TD
    A[Accommodation Page] --> B[Hero Section]
    B --> C[Title: Safari Accommodations]
    
    A --> D[Accommodation Options]
    D --> E[Luxury Safari Villa]
    D --> F[Premium Safari Tent]
    D --> G[Eco Lodge Room]
    
    H[Each Accommodation] --> I[Large Hero Image]
    H --> J[Title & Description]
    H --> K[Capacity & Amenities List]
    H --> L[Features Grid]
    H --> M[Price & Book Button]
    
    A --> N[Shared Amenities Section]
    N --> O[Restaurant Icon & Text]
    N --> P[Pool Icon & Text]
    N --> Q[Game Drive Icon & Text]
    N --> R[WiFi Icon & Text]
    
    A --> S[Call to Action]
    S --> T[Book Your Stay Button]`
  },
  {
    id: 'conservation',
    title: 'Conservation Page',
    description: 'Conservation mission, initiatives, and impact statistics',
    mermaidCode: `graph TD
    A[Conservation Page] --> B[Hero Section]
    B --> C[Title: Conservation Mission]
    
    A --> D[Mission Statement]
    D --> E[Conservation Philosophy Text]
    
    A --> F[Initiatives Grid]
    F --> G[Wildlife Protection Card]
    F --> H[Habitat Restoration Card]
    F --> I[Community Education Card]
    F --> J[Research Programs Card]
    
    A --> K[Impact Statistics]
    K --> L[Elephants Protected: 150+]
    K --> M[Hectares Restored: 2,500]
    K --> N[Students Educated: 1,200]
    K --> O[Research Projects: 15]
    
    A --> P[Partners Section]
    P --> Q[Partner Organization Cards]
    
    A --> R[CTA Section]
    R --> S[Book Conservation Experience]`
  },
  {
    id: 'culture',
    title: 'Culture Page',
    description: 'Maasai culture experiences, traditions, and artisan profiles',
    mermaidCode: `graph TD
    A[Culture Page] --> B[Hero Section]
    B --> C[Title: Maasai Culture]
    
    A --> D[Introduction Section]
    D --> E[Cultural Philosophy Text]
    
    A --> F[Cultural Experiences]
    F --> G[Traditional Ceremonies]
    F --> H[Craft Workshops]
    F --> I[Storytelling Sessions]
    F --> J[Music & Dance]
    
    A --> K[Sacred Traditions]
    K --> L[Cattle Ceremonies]
    K --> M[Warrior Traditions]
    K --> N[Spiritual Practices]
    
    A --> O[Master Artisans]
    O --> P[Beadwork Artist Profile]
    O --> Q[Woodcarver Profile]
    O --> R[Textile Weaver Profile]
    
    A --> S[Community Impact]
    S --> T[Economic Benefits Text]
    
    A --> U[CTA Section]
    U --> V[Experience Culture Button]`
  },
  {
    id: 'contact',
    title: 'Contact Page',
    description: 'Contact form, information, and location details',
    mermaidCode: `graph TD
    A[Contact Page] --> B[Hero Section]
    B --> C[Title: Contact Us]
    
    A --> D[Contact Form]
    D --> E[Name Field]
    D --> F[Email Field]
    D --> G[Phone Field]
    D --> H[Guests Field]
    D --> I[Dates Field]
    D --> J[Message Textarea]
    D --> K[Send Message Button]
    
    A --> L[Contact Information Grid]
    L --> M[Phone Card with Icon]
    L --> N[Email Card with Icon]
    L --> O[Location Card with Icon]
    L --> P[Hours Card with Icon]
    
    A --> Q[Location Section]
    Q --> R[Map Placeholder]
    Q --> S[Driving Directions]
    Q --> T[Transfer Information]`
  },
  {
    id: 'booking',
    title: 'Booking Page',
    description: 'Comprehensive booking form with guest details and experience selection',
    mermaidCode: `graph TD
    A[Booking Page] --> B[Hero Section]
    B --> C[Title: Book Your Stay]
    
    A --> D[Booking Form]
    D --> E[Guest Information Section]
    D --> F[Stay Details Section]
    D --> G[Experience Selection]
    D --> H[Special Requests]
    
    E --> I[First Name]
    E --> J[Last Name]
    E --> K[Email]
    E --> L[Phone]
    
    F --> M[Check-in Date]
    F --> N[Check-out Date]
    F --> O[Guests Count]
    F --> P[Accommodation Type]
    
    G --> Q[Available Experiences List]
    G --> R[Checkboxes for Selection]
    
    A --> S[Booking Summary]
    S --> T[Selected Items]
    S --> U[Total Price]
    S --> V[Complete Booking Button]`
  }
];

const Wireframes = () => {
  const downloadWireframe = (wireframe: typeof wireframes[0]) => {
    // Create a downloadable mermaid file
    const content = `# ${wireframe.title}\n\n${wireframe.description}\n\n\`\`\`mermaid\n${wireframe.mermaidCode}\n\`\`\``;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wireframe-${wireframe.id}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllWireframes = () => {
    let allContent = '# Enkop Eco Lodge - Website Wireframes\n\n';
    allContent += 'Complete wireframe documentation for the Enkop Eco Lodge website.\n\n';
    
    wireframes.forEach((wireframe, index) => {
      allContent += `## ${index + 1}. ${wireframe.title}\n\n`;
      allContent += `${wireframe.description}\n\n`;
      allContent += `\`\`\`mermaid\n${wireframe.mermaidCode}\n\`\`\`\n\n`;
      allContent += '---\n\n';
    });
    
    const blob = new Blob([allContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'enkop-eco-lodge-wireframes.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Website Wireframes
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Complete structural documentation for the Enkop Eco Lodge website, showing page layouts, navigation flow, and component organization.
          </p>
          <Button 
            onClick={downloadAllWireframes}
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Download className="w-5 h-5 mr-2" />
            Download All Wireframes
          </Button>
        </section>

        {/* Wireframes Grid */}
        <section className="grid gap-8 md:gap-12">
          {wireframes.map((wireframe) => (
            <Card key={wireframe.id} className="overflow-hidden">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <FileImage className="w-6 h-6" />
                  {wireframe.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {wireframe.description}
                </CardDescription>
                <Button 
                  onClick={() => downloadWireframe(wireframe)}
                  variant="outline"
                  size="sm"
                  className="w-fit mx-auto"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Wireframe
                </Button>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-center text-muted-foreground">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 bg-background/50">
                      <FileImage className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                      <p className="text-sm">Mermaid Diagram: {wireframe.title}</p>
                      <p className="text-xs mt-2">Click download button to get the wireframe file</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Usage Instructions */}
        <section className="mt-16 bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">How to Use These Wireframes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Viewing Wireframes</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Downloaded files contain Mermaid diagram code</li>
                <li>• Use Mermaid Live Editor (mermaid.live) to visualize</li>
                <li>• Copy and paste the code into the editor</li>
                <li>• Export as PNG, SVG, or PDF from the editor</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">File Contents</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Wireframe title and description</li>
                <li>• Complete Mermaid diagram syntax</li>
                <li>• Ready to use in documentation tools</li>
                <li>• Compatible with GitHub, GitLab, and Notion</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Wireframes;