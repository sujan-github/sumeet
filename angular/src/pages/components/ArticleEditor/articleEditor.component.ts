import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-article-editor',
    templateUrl: './articleEditor.component.html',
    styleUrls: ['./articleEditor.component.css']
})
export class ArticleEditorComponent implements OnInit {
    title = 'Article Editor';

    public editorValue = `
    <heading>Our Medical Team</heading>
<div class="container">
    <article>
        <h2 class="sub2text">Desireé McCarthy-Keith, M.D., M.P.H., F.A.C.O.G.</h2>
        <p>
            <img class="alignright size-full img-responsive subimg wp-image-1803" src="https://www.ivf.com/wp-content/uploads/sites/295/2017/04/Dr-1.jpg"
                alt="Dr. McCarthy-Keith" width="414" height="311">Dr. McCarthy-Keith is board certified in both obstetrics and gynecology and reproductive endocrinology and infertility.
            She is a fellow of the American Congress of Obstetrics and Gynecology, a member of the American Society for Reproductive
            Medicine and was honored by Black Health Magazine as one of Atlanta’s most influential African American doctors.
            She is honored to serve as Adjunct Clinical Assistant Professor of obstetrics and gynecology at Morehouse School
            of Medicine and was recognized by Who’s Who in Black Atlanta in 2011, 2012, 2014, 2015 and 2016.</p>
        <p>Dr. McCarthy-Keith earned her medical degree from the University of North Carolina at Chapel Hill and also a Master
            of Public Health in maternal and child health from the University of North Carolina. She completed her obstetrics
            and gynecology residency training at Duke University Medical Center and a fellowship in Reproductive Endocrinology
            and Infertility at the National Institutes of Health in Bethesda, Maryland. During her fellowship, Dr. McCarthy-Keith’s
            research focused on the molecular mechanisms of uterine fibroid regulation and reproductive health disparities.
            She has special interests in male and female infertility, polycystic ovary syndrome, uterine fibroids and in
            vitro fertilization. She has authored several peer-reviewed publications on reproductive and infertility topics
            and has presented her research nationally.</p>
        <p>Prior to joining Shady Grove Fertility Atlanta, formerly Georgia Reproductive Specialists, Dr. McCarthy-Keith practiced
            general obstetrics and gynecology in Virginia and South Carolina. While in Maryland, she treated patients with
            reproductive endocrine and fertility disorders at the National Institutes of Health and Walter Reed Army Medical
            Center. Dr. McCarthy-Keith was a lieutenant commander in the United States Public Health Service Commissioned
            Corps and held the position of assistant professor of Obstetrics and Gynecology at the Uniformed Services University
            of the Health Sciences.</p>
        <p>Dr. McCarthy-Keith is passionate about her vegan way of life. She shares her enthusiasm for plant-based nutrition
            with everyone she meets and she encourages her patients to incorporate a&nbsp;healthy diet into their fertility
            lifestyle. A native of North Carolina, Dr. McCarthy-Keith is the proud mother of two energetic sons. She spends
            her free time in Atlanta visiting the zoo, strolling the botanical gardens and cheering on the Braves.</p>
    </article>

    <article>
    <h2 class="sub2text">Desireé McCarthy-Keith, M.D., M.P.H., F.A.C.O.G.</h2>
    <p>
        <img class="alignright size-full img-responsive subimg wp-image-1803" src="https://www.ivf.com/wp-content/uploads/sites/295/2017/04/Dr-1.jpg"
            alt="Dr. McCarthy-Keith" width="264" height="264">Dr. McCarthy-Keith is board certified in both obstetrics and gynecology and reproductive endocrinology and infertility.
        She is a fellow of the American Congress of Obstetrics and Gynecology, a member of the American Society for Reproductive
        Medicine and was honored by Black Health Magazine as one of Atlanta’s most influential African American doctors.
        She is honored to serve as Adjunct Clinical Assistant Professor of obstetrics and gynecology at Morehouse School
        of Medicine and was recognized by Who’s Who in Black Atlanta in 2011, 2012, 2014, 2015 and 2016.</p>
    <p>Dr. McCarthy-Keith earned her medical degree from the University of North Carolina at Chapel Hill and also a Master of
        Public Health in maternal and child health from the University of North Carolina. She completed her obstetrics and
        gynecology residency training at Duke University Medical Center and a fellowship in Reproductive Endocrinology and
        Infertility at the National Institutes of Health in Bethesda, Maryland. During her fellowship, Dr. McCarthy-Keith’s
        research focused on the molecular mechanisms of uterine fibroid regulation and reproductive health disparities. She
        has special interests in male and female infertility, polycystic ovary syndrome, uterine fibroids and in vitro fertilization.
        She has authored several peer-reviewed publications on reproductive and infertility topics and has presented her
        research nationally.</p>
    <p>Prior to joining Shady Grove Fertility Atlanta, formerly Georgia Reproductive Specialists, Dr. McCarthy-Keith practiced
        general obstetrics and gynecology in Virginia and South Carolina. While in Maryland, she treated patients with reproductive
        endocrine and fertility disorders at the National Institutes of Health and Walter Reed Army Medical Center. Dr. McCarthy-Keith
        was a lieutenant commander in the United States Public Health Service Commissioned Corps and held the position of
        assistant professor of Obstetrics and Gynecology at the Uniformed Services University of the Health Sciences.</p>
    <p>Dr. McCarthy-Keith is passionate about her vegan way of life. She shares her enthusiasm for plant-based nutrition with
        everyone she meets and she encourages her patients to incorporate a&nbsp;healthy diet into their fertility lifestyle.
        A native of North Carolina, Dr. McCarthy-Keith is the proud mother of two energetic sons. She spends her free time
        in Atlanta visiting the zoo, strolling the botanical gardens and cheering on the Braves.</p>
    </article>
</div>`;

    ngOnInit() { }
}
