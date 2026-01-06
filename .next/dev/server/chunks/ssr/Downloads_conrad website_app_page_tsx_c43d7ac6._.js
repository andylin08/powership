module.exports = [
"[project]/Downloads/conrad website/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AirshipDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/conrad website/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const SHOTS = [
    {
        name: "Wind Turbines",
        label: "FEATURE 01",
        headline: "Wind Turbines",
        description: "Advanced vertical-axis turbines harvest wind energy at altitude, powering sustainable flight.",
        wide: {
            cam: [
                1.65,
                0.22,
                2.0
            ],
            look: [
                1.35,
                0.08,
                0.3
            ],
            rotY: 0.35
        },
        close: {
            cam: [
                1.35,
                0.15,
                1.4
            ],
            look: [
                1.05,
                0.05,
                0.2
            ],
            rotY: 0.4
        }
    },
    {
        name: "Carbon Sails",
        label: "FEATURE 02",
        headline: "Carbon Sails",
        description: "Ultra-lightweight carbon fiber sails maximize lift efficiency while minimizing structural weight.",
        wide: {
            cam: [
                1.05,
                0.72,
                1.7
            ],
            look: [
                0.65,
                -.2,
                0.0
            ],
            rotY: 0.12
        },
        close: {
            cam: [
                0.55,
                1.02,
                1.35
            ],
            look: [
                0.55,
                -.2,
                0.0
            ],
            rotY: 0.05
        }
    },
    {
        name: "Propeller Pods",
        label: "FEATURE 03",
        headline: "Propeller Pods",
        description: "Gimbaled electric propulsion pods provide precise thrust vectoring for unmatched maneuverability.",
        wide: {
            cam: [
                1.2,
                0.55,
                2.25
            ],
            look: [
                0.6,
                0.18,
                0.0
            ],
            rotY: 0.55
        },
        close: {
            cam: [
                1.05,
                0.35,
                1.15
            ],
            look: [
                0.95,
                0.1,
                0.25
            ],
            rotY: 0.55
        }
    },
    {
        name: "Stabilizing Fins",
        label: "FEATURE 04",
        headline: "Stabilizing Fins",
        description: "Active stabilization fins with AI-powered control maintain perfect balance in turbulent conditions.",
        // PULLED WAY UP + zoomed out
        wide: {
            cam: [
                -0.75,
                1.45,
                -3.35
            ],
            look: [
                0.10,
                -0.15,
                0.0
            ],
            rotY: 1.25
        },
        close: {
            cam: [
                -0.55,
                1.25,
                -2.85
            ],
            look: [
                -0.05,
                -0.35,
                -0.15
            ],
            rotY: 1.25
        }
    }
];
function AirshipDemo() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heroTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const featureRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const footerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadProgress, setLoadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || !canvasRef.current) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        // Scene
        const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
        scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"](0x000000);
        // Camera
        const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, window.innerWidth / window.innerHeight, 0.1, 2000);
        // Create a rig object for smooth camera control (GSAP animates this directly)
        const cameraRig = {
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0),
            lookAt: new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0)
        };
        // Renderer
        const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
            canvas: canvasRef.current,
            antialias: true,
            alpha: false,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
        renderer.toneMappingExposure = 0.65;
        renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
        // Lighting
        scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.16));
        scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HemisphereLight"](0xffffff, 0x080808, 0.16));
        const keyLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.75);
        keyLight.position.set(6, 10, 6);
        scene.add(keyLight);
        const fillLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0x88ccff, 0.16);
        fillLight.position.set(-7, 3, -6);
        scene.add(fillLight);
        const rimLight = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffddaa, 0.18);
        rimLight.position.set(-4, 3, 9);
        scene.add(rimLight);
        let airshipModel = null;
        let modelCenter = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 0, 0);
        let modelRadius = 5;
        let baseYaw = 0;
        // Helper to get world coordinates from shot config
        const getWorldCoords = (shot)=>({
                x: modelCenter.x + shot[0] * modelRadius,
                y: modelCenter.y + shot[1] * modelRadius,
                z: modelCenter.z + shot[2] * modelRadius
            });
        // GSAP setup
        let gsapCtx = null;
        const setupScroll = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
            // Starting position (hero)
            const heroStart = {
                cam: [
                    0.0,
                    0.62,
                    2.8
                ],
                look: [
                    0.0,
                    0.20,
                    0.0
                ],
                rotY: 0.0
            };
            const startCam = getWorldCoords(heroStart.cam);
            const startLook = getWorldCoords(heroStart.look);
            cameraRig.position.set(startCam.x, startCam.y, startCam.z);
            cameraRig.lookAt.set(startLook.x, startLook.y, startLook.z);
            camera.position.copy(cameraRig.position);
            camera.lookAt(cameraRig.lookAt);
            if (airshipModel) {
                airshipModel.rotation.y = baseYaw + heroStart.rotY;
            }
            gsapCtx = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
                // HERO - fade out text, camera stays put
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    scrollTrigger: {
                        trigger: heroTextRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1.5
                    }
                }).to(heroTextRef.current, {
                    opacity: 0,
                    y: -50,
                    ease: "none"
                });
                // Transition from hero to first feature
                const firstShot = SHOTS[0];
                const firstWide = getWorldCoords(firstShot.wide.cam);
                const firstWideLook = getWorldCoords(firstShot.wide.look);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                    scrollTrigger: {
                        trigger: featureRefs.current[0],
                        start: "top bottom",
                        end: "top center",
                        scrub: 1.5
                    }
                }).to(cameraRig.position, {
                    x: firstWide.x,
                    y: firstWide.y,
                    z: firstWide.z,
                    ease: "none"
                }, 0).to(cameraRig.lookAt, {
                    x: firstWideLook.x,
                    y: firstWideLook.y,
                    z: firstWideLook.z,
                    ease: "none"
                }, 0).to(airshipModel?.rotation ?? {}, {
                    y: baseYaw + (firstShot.wide.rotY ?? 0),
                    ease: "none"
                }, 0);
                // FEATURES - smooth continuous animation
                SHOTS.forEach((shot, index)=>{
                    const featureEl = featureRefs.current[index];
                    if (!featureEl) return;
                    const wide = getWorldCoords(shot.wide.cam);
                    const wideLook = getWorldCoords(shot.wide.look);
                    const close = getWorldCoords(shot.close.cam);
                    const closeLook = getWorldCoords(shot.close.look);
                    // Main feature animation: wide -> close
                    const featureTl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: featureEl,
                            start: "top center",
                            end: "center center",
                            scrub: 1.5
                        }
                    });
                    featureTl.to(cameraRig.position, {
                        x: close.x,
                        y: close.y,
                        z: close.z,
                        ease: "none"
                    }, 0).to(cameraRig.lookAt, {
                        x: closeLook.x,
                        y: closeLook.y,
                        z: closeLook.z,
                        ease: "none"
                    }, 0);
                    if (airshipModel) {
                        featureTl.to(airshipModel.rotation, {
                            y: baseYaw + (shot.close.rotY ?? 0),
                            ease: "none"
                        }, 0);
                    }
                    // Text fade in
                    featureTl.fromTo(featureEl.querySelector(".feature-content"), {
                        opacity: 0,
                        y: 30
                    }, {
                        opacity: 1,
                        y: 0,
                        ease: "none"
                    }, 0);
                    // Transition to next section (or back to wide for last)
                    const nextShot = SHOTS[index + 1];
                    const exitTl = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: featureEl,
                            start: "center center",
                            end: "bottom center",
                            scrub: 1.5
                        }
                    });
                    if (nextShot) {
                        // Transition to next feature's wide position
                        const nextWide = getWorldCoords(nextShot.wide.cam);
                        const nextWideLook = getWorldCoords(nextShot.wide.look);
                        exitTl.to(cameraRig.position, {
                            x: nextWide.x,
                            y: nextWide.y,
                            z: nextWide.z,
                            ease: "none"
                        }, 0).to(cameraRig.lookAt, {
                            x: nextWideLook.x,
                            y: nextWideLook.y,
                            z: nextWideLook.z,
                            ease: "none"
                        }, 0);
                        if (airshipModel) {
                            exitTl.to(airshipModel.rotation, {
                                y: baseYaw + (nextShot.wide.rotY ?? 0),
                                ease: "none"
                            }, 0);
                        }
                    } else {
                        // Last feature - go back to wide
                        exitTl.to(cameraRig.position, {
                            x: wide.x,
                            y: wide.y,
                            z: wide.z,
                            ease: "none"
                        }, 0).to(cameraRig.lookAt, {
                            x: wideLook.x,
                            y: wideLook.y,
                            z: wideLook.z,
                            ease: "none"
                        }, 0);
                        if (airshipModel) {
                            exitTl.to(airshipModel.rotation, {
                                y: baseYaw + (shot.wide.rotY ?? 0),
                                ease: "none"
                            }, 0);
                        }
                    }
                    // Text fade out
                    exitTl.to(featureEl.querySelector(".feature-content"), {
                        opacity: 0,
                        y: -30,
                        ease: "none"
                    }, 0);
                });
                // FOOTER - return to centered hero-like view
                if (footerRef.current) {
                    const endCam = getWorldCoords([
                        0.0,
                        0.65,
                        2.95
                    ]);
                    const endLook = getWorldCoords([
                        0.0,
                        0.20,
                        0.0
                    ]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: footerRef.current,
                            start: "top center",
                            end: "center center",
                            scrub: 1.5
                        }
                    }).to(cameraRig.position, {
                        x: endCam.x,
                        y: endCam.y,
                        z: endCam.z,
                        ease: "none"
                    }, 0).to(cameraRig.lookAt, {
                        x: endLook.x,
                        y: endLook.y,
                        z: endLook.z,
                        ease: "none"
                    }, 0).to(airshipModel?.rotation ?? {}, {
                        y: baseYaw + 0.0,
                        ease: "none"
                    }, 0);
                }
            }, containerRef);
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
        };
        // Load model
        const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLTFLoader"]();
        loader.load("/airship.glb", (gltf)=>{
            airshipModel = gltf.scene;
            // Optimize geometry
            airshipModel.traverse((child)=>{
                if (child instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"]) {
                    child.frustumCulled = true;
                    if (child.geometry) {
                        child.geometry.computeBoundingSphere();
                    }
                }
            });
            scene.add(airshipModel);
            const box = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(airshipModel);
            const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
            airshipModel.position.sub(center);
            const box2 = new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(airshipModel);
            const sphere = box2.getBoundingSphere(new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sphere"]());
            modelCenter = sphere.center.clone();
            modelRadius = Math.max(0.0001, sphere.radius);
            baseYaw = airshipModel.rotation.y;
            setupScroll();
            setLoadProgress(100);
            setTimeout(()=>{
                setIsLoaded(true);
                document.body.style.overflow = prevOverflow || "auto";
            }, 250);
        }, (progress)=>{
            const pct = progress.total && progress.total > 0 ? progress.loaded / progress.total * 100 : Math.min(95, loadProgress + 1);
            setLoadProgress((p)=>Math.max(p, Math.round(pct)));
        }, (error)=>{
            console.error("[glb] load failed:", error);
            setLoadProgress(100);
            setTimeout(()=>{
                setIsLoaded(true);
                document.body.style.overflow = prevOverflow || "auto";
            }, 250);
        });
        // Render loop - direct camera update from GSAP-controlled rig
        let raf = 0;
        const animate = ()=>{
            raf = requestAnimationFrame(animate);
            // Direct copy from rig (GSAP handles all smoothing via scrub)
            camera.position.copy(cameraRig.position);
            camera.lookAt(cameraRig.lookAt);
            renderer.render(scene, camera);
        };
        animate();
        // Debounced resize
        let resizeTimeout;
        const handleResize = ()=>{
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(()=>{
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
            }, 100);
        };
        window.addEventListener("resize", handleResize);
        return ()=>{
            cancelAnimationFrame(raf);
            clearTimeout(resizeTimeout);
            window.removeEventListener("resize", handleResize);
            try {
                gsapCtx?.revert();
            } catch  {}
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().forEach((t)=>t.kill());
            renderer.dispose();
            document.body.style.overflow = prevOverflow;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: [
                    "fixed inset-0 z-[999] flex items-center justify-center",
                    "bg-black/80 backdrop-blur-xl",
                    "transition-opacity duration-500",
                    isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                ].join(" "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-xl px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/70 text-xs tracking-[0.35em] uppercase",
                                    children: "Initializing"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white/60 text-xs tracking-[0.25em] tabular-nums",
                                    children: [
                                        loadProgress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 460,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white text-4xl md:text-5xl font-semibold tracking-tight",
                            children: "Airship"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 text-white/65 text-sm leading-relaxed",
                            children: "Loading model and lighting for a smooth scroll experience."
                        }, void 0, false, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[2px] w-full bg-white/10 overflow-hidden rounded-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-white/70 rounded-full transition-[width] duration-200",
                                        style: {
                                            width: `${Math.min(100, Math.max(0, loadProgress))}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center gap-3 text-white/45 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-3 rounded-full border border-white/30 border-t-white/80 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                            lineNumber: 479,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tracking-[0.18em] uppercase",
                                            children: "Please wait"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                    lineNumber: 459,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/conrad website/app/page.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "fixed inset-0 w-full h-full"
            }, void 0, false, {
                fileName: "[project]/Downloads/conrad website/app/page.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 left-0 right-0 z-50 px-8 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between max-w-screen-2xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white text-xl font-semibold tracking-tight",
                            children: "AIRSHIP"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-white/70 hover:text-white text-sm transition-colors",
                                    children: "Overview"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-white/70 hover:text-white text-sm transition-colors",
                                    children: "Specs"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-white/70 hover:text-white text-sm transition-colors",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 493,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                    lineNumber: 491,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/conrad website/app/page.tsx",
                lineNumber: 490,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "h-screen flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: heroTextRef,
                            className: "text-center px-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-white/60 mb-4 tracking-[0.2em] uppercase",
                                    children: "The Future of Flight"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight text-balance",
                                    children: "Airship"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl md:text-2xl text-white/80 max-w-2xl mx-auto text-pretty",
                                    children: "Reimagining sustainable aviation with cutting-edge design and engineering"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 flex items-center justify-center gap-2 text-white/50 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-px h-12 bg-white/30 animate-bounce"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Scroll to explore"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 511,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/conrad website/app/page.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this),
                    SHOTS.map((shot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            ref: (el)=>{
                                featureRefs.current[index] = el;
                            },
                            className: "h-screen flex items-center justify-end px-8 md:px-16 lg:px-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-content max-w-xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-white/50 mb-3 tracking-[0.3em] uppercase",
                                        children: shot.label
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight text-balance",
                                        children: shot.headline
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                        lineNumber: 537,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl text-white/70 leading-relaxed text-pretty",
                                        children: shot.description
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                        lineNumber: 540,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this)
                        }, shot.name, false, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 528,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        ref: footerRef,
                        className: "h-screen flex items-center justify-center px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center max-w-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight text-balance",
                                    children: "Experience the future"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-white/70 mb-12 text-pretty",
                                    children: "Reserve your airship today and be part of the sustainable aviation revolution"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$conrad__website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors",
                                    children: "Reserve Now"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/conrad website/app/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/conrad website/app/page.tsx",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/conrad website/app/page.tsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/conrad website/app/page.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/conrad website/app/page.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_conrad%20website_app_page_tsx_c43d7ac6._.js.map