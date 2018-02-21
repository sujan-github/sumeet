import { IMenu } from '../../../models/models';

export const footer: any = {
  contentCount: 2,
  content: [{
    name: `CONTACT`,
    body: `
        <li class="single_latest_news">
          <!-- <p class="latest_date">02.08.2015</p> -->
          <p class="details">
            <i class="fa fa-envelope"></i> info@venusivfcenter.com</p>
            <p class="details">
            <i class="fa fa-phone"></i> 01-4490333</p>
          <p class="details">
            <i class="fa fa-mobile-phone"></i> +977 980-408-5955 , +977 980-838-3703</p>
          <p class="details">
            <i class="fa fa-map-marker"></i> Mid Baneshwor, Kathmandu</p>
        </li>`
  },
  {
    name: `LOCATIONS`,
    body: `
<li class="single_latest_news">
  <p class="subtitle">Venus IVF Center</p>
  <p class="details">Third Floor, Venus Hospital,</p>
  <p class="details">Mid Baneshwor, Kathmandu,</p>
  <p class="details">Nepal</p>
</li>`}]
};

export const sampleMenus: IMenu[] = [
  {
    Id: 1,
    Name: 'About',
    Url: '#/',
    ParentId: 0,
    children: [
      {
        Id: 4,
        Name: 'About our practices',
        Url: '#/venus/our-practice',
        ParentId: 1,
      },
      {
        Id: 5,
        Name: 'Our Medical Team',
        Url: '#/venus/our-team',
        ParentId: 1,
      }
    ],
  },
  {
    Id: 2,
    Name: 'Services',
    Url: '#/',
    ParentId: 0,
    children: [
      {
        Id: 6,
        Name: 'Initial Diagnosis',
        Url: '#/venus/services/initial-diagnosis',
        ParentId: 2,
        children: [
          {
            Id: 8,
            Name: 'Initial Diagnosis',
            Url: '#/venus/services/initial-diagnosis',
            ParentId: 6,
          }],
      },
      {
        Id: 7,
        Name: 'ART Procedure',
        Url: '#/venus/services/art-procedure',
        ParentId: 2,
      },
      {
        Id: 8,
        Name: 'IVF Procedure',
        Url: '#/venus/services/ivf-procedure',
        ParentId: 2,
      },
      {
        Id: 9,
        Name: 'Intra Cyto Sperm Injection',
        Url: '#/venus/services/icsi',
        ParentId: 2,
      },
      {
        Id: 10,
        Name: 'IUI Procedure',
        Url: '#/venus/services/iui-procedure',
        ParentId: 2,
      },
      {
        Id: 11,
        Name: 'Blastocyst Culture',
        Url: '#/venus/services/blastocyst-culture',
        ParentId: 2,
      },
      {
        Id: 12,
        Name: 'Cryopreservation',
        Url: '#/venus/services/cryopreservation',
        ParentId: 2,
      },
      {
        Id: 13,
        Name: 'Advanced Hysteroscopic Surgery',
        Url: '#/venus/services/advanced-hysteroscopic-surgery',
        ParentId: 2,
      },
      {
        Id: 14,
        Name: 'Operative Video Laparoscopy',
        Url: '#/venus/services/operative-video-laparoscopy',
        ParentId: 2,
      },
      {
        Id: 15,
        Name: 'Pre Implantation Genetic Screening',
        Url: '#/venus/services/pre-implantation-genetic-screening',
        ParentId: 2,
      },
    ],
  },
  {
    Id: 3,
    Name: 'BLOG & News',
    Url: '#/venus/blog-and-news',
    ParentId: 0,
  },
];
