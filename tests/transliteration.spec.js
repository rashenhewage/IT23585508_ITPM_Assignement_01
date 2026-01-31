import { test, expect } from '@playwright/test';

const scenarios = [
    // Positive functional test cases
   { id: 'Pos_Fun_0001', input: 'oyaata suba dhavasak veevaa!', expected: 'ඔයාට සුබ දවසක් වේවා!' },
   // { id: 'Pos_Fun_0002', input: 'Mata podi udhavvak karanna puluvandha?', expected: 'මට පොඩි උදව්වක් කරන්න පුලුවන්ද?' },
   { id: 'Pos_Fun_0002', input: 'Hello goda kaalekin dhaekkee', expected: 'Hello ගොඩ කාලෙකින් දැක්කේ' },
    { id: 'Pos_Fun_0003', input: 'Ehema karanna epaa.', expected: 'එහෙම කරන්න එපා.' },
    { id: 'Pos_Fun_0004', input: 'Mama adha office yanavaa, mata hadhissi vaedak thiyanavaa.', expected: 'මම අද office යනවා, මට හදිස්සි වැඩක් තියනවා.' },
    { id: 'Pos_Fun_0005', input: 'Barcelona city eka harima lassnayi', expected: 'Barcelona city එක හරිම ලස්ස්නයි' },
    { id: 'Pos_Fun_0006', input: 'Meeka hari amaaru naedhdha?', expected: 'මේක හරි අමාරු නැද්ද?' },
    { id: 'Pos_Fun_0007', input: 'Please me file eka upload karanna.', expected: 'Please මෙ file එක upload කරන්න.' },
    //{ id: 'Pos_Fun_0008', input: 'Meeting eka 10.30 A.M. venakan thiyenavaa.', expected: 'Meeting එක 10.30 A.M. වෙනකන් තියෙනවා.' },
    { id: 'Pos_Fun_0008', input: 'heta udhee 9.00 vedhdhi enna', expected: 'හෙට උදේ 9.00 වෙද්දි එන්න' },
    { id: 'Pos_Fun_0009', input: 'Me item eka Rs. 2,500.00 venavaa, eeka nisaa ganna baee', expected: 'මෙ item එක Rs. 2,500.00 වෙනවා, ඒක නිසා ගන්න බෑ' },
    { id: 'Pos_Fun_0010', input: 'oya loku loku dheeval karaNavaa', expected: 'ඔය ලොකු ලොකු දේවල් කරණවා' },
    { id: 'Pos_Fun_0011', input: 'mama enna parakku une bus eka maava dhaala giya nisaa', expected: 'මම එන්න පරක්කු උනෙ bus එක මාව දාල ගිය නිසා' },
    { id: 'Pos_Fun_0012', input: 'eyaalaa heta gamanak yaavi', expected: 'එයාලා හෙට ගමනක් යාවි' },
    { id: 'Pos_Fun_0013', input: 'palayan palayan', expected: 'පලයන් පලයන්' },
    { id: 'Pos_Fun_0014', input: 'meeka submit karanna oona janavaari 31 raee 12.00 ta kalin', expected: 'මේක submit කරන්න ඕන ජනවාරි 31 රෑ 12.00 ට කලින්' },
    { id: 'Pos_Fun_0015', input: 'mama gitaar gahanavaa lassana bayilaa kiyanavaa mata maevilaa peenavaa maLaminii naegitalaa enavaa', expected: 'මම ගිටාර් ගහනවා ලස්සන බයිලා කියනවා මට මැවිලා පේනවා මළමිනී නැගිටලා එනවා' },
    { id: 'Pos_Fun_0016', input: 'karuNaakaralaa ayin venavadha othanin, oyaa paara block karanavaa.', expected: 'කරුණාකරලා අයින් වෙනවද ඔතනින්, ඔයා පාර block කරනවා.' },
   // { id: 'Pos_Fun_0017', input: 'oyaagee facebook account eka mokakdha?', expected: 'ඔයාගේ facebook account එක මොකක්ද?' },
    { id: 'Pos_Fun_0018', input: 'mama uuta kivvaa 10 + 10 =20 kiyalaa eeth pora kiyannema 30 kiyalaa.', expected: 'මම ඌට කිව්වා 10 + 10 =20 කියලා ඒත් පොර කියන්නෙම 30 කියලා.' },
   // { id: 'Pos_Fun_0019', input: 'mama dhuvagena dhuvagena dhuvagena giyaa', expected: 'මම දුවගෙන දුවගෙන දුවගෙන ගියා' },
    { id: 'Pos_Fun_0020', input: 'Game of thrones kiyanne loke thiyana popular ma tv show eka', expected: 'Game ඔෆ් thrones කියන්නෙ ලොකෙ තියන popular ම ට්ව් show එක' },
    { id: 'Pos_Fun_0021', input: 'hanika varev kollanee menna mehe varev, menna mehe varev kollani nata nataa varev, thopita harima vaasiyak nata nata varev yakoo', expected: 'හනික වරෙව් කොල්ලනේ මෙන්න මෙහෙ වරෙව්, මෙන්න මෙහෙ වරෙව් කොල්ලනි නට නටා වරෙව්, තොපිට හරිම වාසියක් නට නට වරෙව් යකෝ' },
    { id: 'Pos_Fun_0022', input: 'mama injection gahanna aasayi kiyanne boru', expected: 'මම injection ගහන්න ආසයි කියන්නෙ බොරු' },
    { id: 'Pos_Fun_0023', input: 'pudhuma amaaruvakin thamyi mee assignment eka keruvee, ahoo dhukaki iraki thithaki !!!', expected: 'පුදුම අමාරුවකින් තම්යි මේ assignment එක කෙරුවේ, අහෝ දුකකි ඉරකි තිතකි !!!' },
    { id: 'Pos_Fun_0024', input: 'oyaa enavaanam api yamu.', expected: 'ඔයා එනවානම් අපි යමු.' },

    // Negative functional test cases
    { id: 'Neg_Fun_0001', input: 'Anakin Skywalker kiyanne maara talented Jedi Knight kenek. eya ekka fight karanna puluvan kattiya godak aduyi. eyata godak hodhata force eka use karanna puluvan. ee vagema eya harima adhishTaanashili pudhgalayek kiyalath hamooma kiyanavaa.', expected: 'Anakin Skywalker කියන්නෙ මාර talented Jedi Knight කෙනෙක්. එය එක්ක fight කරන්න පුලුවන් කට්ටිය ගොඩක් අඩුයි. එයට ගොඩක් හොදට force එක use කරන්න පුලුවන්. ඒ වගෙම එය හරිම අදිශ්ඨානශිලි පුද්ගලයෙක් කියලත් හමෝම කියනවා.' },
    { id: 'Neg_Fun_0002', input: 'aparaadhe Max Verstappen meepaara Formula 1 World Drivers Champion venna thibba chance eka miss une anuu namayen. eyaata thava points dhekayi madhi unee. kohedha ithin eyaa ara Barcelona race ekedhi tharaha gihin George Russell happanna gihin panelty ekak kaeevanee. ethanin eyaata eyage super drivers license eken points thunak kaepuvaa. ee edhaa kaepuna points thuna thibbaa nam meepaara title eka dhinanne Max. ehenam api haemootama du du du Max Verstappen kiya kiya inna thibunaa. aduma gaane Oscar Piastri vath title eka dhinnaa nam mechchara avlak naee. Lando ne dhinnee. mama eyaata echcharama kaemathi naee. balamu ithin meepaara aluth Redbull car eka giyapaarata vadaa tikak hodha unoth aluth Ford engine ekath ekka Max ta chance ekak thiyeevi.', expected: 'අපරාදෙ Max Verstappen මේපාර Formula 1 World Drivers Champion වෙන්න තිබ්බ chance එක miss උනෙ අනූ නමයෙන්. එයාට තව points දෙකයි මදි උනේ. කොහෙද ඉතින් එයා අර Barcelona race එකෙදි තරහ ගිහින් George Russell හප්පන්න ගිහින් panelty එකක් කෑවනේ. එතනින් එයාට එයගෙ super drivers license එකෙන් points තුනක් කැපුවා. ඒ එදා කැපුන points තුන තිබ්බා නම් මේපාර title එක දිනන්නෙ Max. එහෙනම් අපි හැමෝටම ඩු ඩු ඩු Max Verstappen කිය කිය ඉන්න තිබුනා. අඩුම ගානෙ Oscar Piastri වත් title එක දින්නා නම් මෙච්චර අව්ලක් නෑ. Lando නේ දින්නේ. මම එයාට එච්චරම කැමති නෑ. බලමු ඉතින් මේපාර අලුත් Redbull car එක ගියපාරට වඩා ටිකක් හොද උනොත් අලුත් Ford engine එකත් එක්ක Max ට chance එකක් තියේවි.' },
    { id: 'Neg_Fun_0003', input: 'Apidhavalkaeemaekakannayamu', expected: 'අපි දවල් කෑම කන්න යමු' },
    { id: 'Neg_Fun_0004', input: 'you can do this kiyalaa teacher mata kivvaa', expected: 'you can do this කියලා teacher මට කිව්වා' },
    { id: 'Neg_Fun_0005', input: 'mama FB eke innavaa godak velaavata ee nisaa instagram use vennema naee', expected: 'මම FaceBook eke ඉන්නවා ගොඩක් වෙලාවට ඒ නිසා instagram use වෙන්නෙම නෑ' },
    { id: 'Neg_Fun_0006', input: 'magee nama Percy jackson, mama poseidon gee puthrayek', expected: 'මගේ නම Percy Jackson, මම Poseidon ගේ පුත්‍රයෙක්' },
    { id: 'Neg_Fun_0007', input: 'barcelona, real madrid, liverpool, bayern munich, man city, psg, inter milan, ac milan, juventus kiyanne looke thiyana lokuma club', expected: 'barcelona, real madrid, liverpool, bayern munich, man city, psg, inter milan, ac milan, juventus කියන්නෙ ලෝකෙ තියන ලොකුම club' },
    { id: 'Neg_Fun_0008', input: 'mata ooka dheepan', expected: 'මට ඕක දීපන්' },
    { id: 'Neg_Fun_0009', input: 'john Cena gee catch phrase eka thamayi you cant see me.', expected: 'john Cena ගේ catch phrase එක තමයි you cant see me.' },
    { id: 'Neg_Fun_0010', input: 'Robert Downey JR thamyi issara iron man ta ragapaeevee, eeth dhan eyaa doctor doom.', expected: 'Robert Downey JR තම්යි ඉස්සර iron man ට රගපෑවේ, ඒත් දන් එයා doctor doom.' },

    // UI test case
    { id: 'Pos_UI_0001', input: 'mama gedhara yanavaa', expected: 'Sinhala output should be cleared automatically when the Singlish input field is cleared' },

    
];

test.describe('SwiftTranslator Automation', () => {

    test.setTimeout(180000); // 3 minutes total timeout

    for (const data of scenarios) {
        test(`Test Case ${data.id}`, async ({ page }) => {
            // FIX 1: Use domcontentloaded to avoid waiting for slow ads
            await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

            const normalize = (value) => {
                const text = (value ?? '').replace(/\r\n/g, '\n').trim();
                const withoutTitle = text.replace(/^Sinhala\s*\n?/i, '');
                return withoutTitle.trimEnd();
            };

            const getSinhalaPanelOutput = async () => {
                return await page.evaluate(() => {
                    const containsSinhala = (text) => /[\u0D80-\u0DFF]/.test(text);
                    const isVisible = (element) => {
                        const style = window.getComputedStyle(element);
                        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
                        const rect = element.getBoundingClientRect();
                        return rect.width > 0 && rect.height > 0;
                    };

                    const rightEdge = window.innerWidth / 2;
                    const candidates = Array.from(document.querySelectorAll('body *'))
                        .filter((element) => {
                            if (!(element instanceof HTMLElement)) return false;
                            if (!isVisible(element)) return false;
                            if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return false;
                            if (element.closest('textarea')) return false;
                            const rect = element.getBoundingClientRect();
                            return rect.left >= rightEdge;
                        })
                        .map((element) => {
                            const text = element.innerText ?? '';
                            return { element, text };
                        })
                        .filter((item) => item.text && containsSinhala(item.text));

                    let bestText = '';
                    let bestScore = -1;

                    for (const item of candidates) {
                        const text = item.text;
                        const sinhalaCount = (text.match(/[\u0D80-\u0DFF]/g) || []).length;
                        const score = sinhalaCount * 10 + Math.min(text.length, 500);
                        if (score > bestScore) {
                            bestScore = score;
                            bestText = text;
                        }
                    }

                    return bestText;
                });
            };

            const visibleTextareas = page.locator('textarea:visible');
            const textareaCount = await visibleTextareas.count();

            let inputField = visibleTextareas.first();
            let outputField = visibleTextareas.last();

            if (textareaCount >= 2) {
                const firstIsReadOnly = await visibleTextareas.first().evaluate((el) => el.readOnly || el.disabled);
                const lastIsReadOnly = await visibleTextareas.last().evaluate((el) => el.readOnly || el.disabled);

                if (!firstIsReadOnly && lastIsReadOnly) {
                    inputField = visibleTextareas.first();
                    outputField = visibleTextareas.last();
                } else if (firstIsReadOnly && !lastIsReadOnly) {
                    inputField = visibleTextareas.last();
                    outputField = visibleTextareas.first();
                } else {
                    inputField = visibleTextareas.nth(0);
                    outputField = visibleTextareas.nth(1);
                }
            }

            await inputField.waitFor({ state: 'visible' });
            
            await inputField.fill('');
            await inputField.pressSequentially(data.input, { delay: 15 });

            // Wait for conversion/output
            await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).not.toBe('');

            const actualOutputRaw = await getSinhalaPanelOutput();
            const actualOutput = normalize(actualOutputRaw);
            const expectedOutput = normalize(data.expected);
            const pass = actualOutput === expectedOutput;

            console.log(`\n-----------------------------------`);
            console.log(`TC ID: ${data.id}`);
            console.log(`INPUT: ${data.input}`);
            console.log(`EXPECTED: ${data.expected}`);
            console.log(`ACTUAL: ${actualOutputRaw}`);
            console.log(`STATUS: ${pass ? 'PASS' : 'FAIL'}`);
            console.log(`-----------------------------------`);
            
            const lines = actualOutput
                .split('\n')
                .map(l => l.trim())
                .filter(Boolean);

            expect(lines).toContain(expectedOutput);

        });
    }

    test('Pos_UI_0002: Sinhala output clears when Singlish input is cleared', async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded' });

        const normalize = (value) => {
            const text = (value ?? '').replace(/\r\n/g, '\n').trim();
            const withoutTitle = text.replace(/^Sinhala\s*\n?/i, '');
            return withoutTitle.trimEnd();
        };

        const getSinhalaPanelOutput = async () => {
            const output = page
                .locator('text=Sinhala')
                .locator('..')
                .locator('> :nth-child(2)');

            await expect(output).toBeVisible();
            return (await output.innerText()).trim();
        };


        const visibleTextareas = page.locator('textarea:visible');
        const textareaCount = await visibleTextareas.count();

        let inputField = visibleTextareas.first();
        //let outputField = visibleTextareas.last();

        if (textareaCount >= 2) {
            const firstIsReadOnly = await visibleTextareas.first().evaluate((el) => el.readOnly || el.disabled);
            const lastIsReadOnly = await visibleTextareas.last().evaluate((el) => el.readOnly || el.disabled);

            if (!firstIsReadOnly && lastIsReadOnly) {
                inputField = visibleTextareas.first();
                outputField = visibleTextareas.last();
            } else if (firstIsReadOnly && !lastIsReadOnly) {
                inputField = visibleTextareas.last();
                outputField = visibleTextareas.first();
            } else {
                inputField = visibleTextareas.nth(0);
                outputField = visibleTextareas.nth(1);
            }
        }
        
        await inputField.fill('mama gedhara yanavaa');
        await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).not.toBe('');
        await inputField.fill('');
        await expect.poll(async () => normalize(await getSinhalaPanelOutput()), { timeout: 15000 }).toBe('');
    });
});