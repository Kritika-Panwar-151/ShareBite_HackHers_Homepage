import React from 'react';
import styles from './NeighbourhoodBackground.module.css';

/**
 * ============================================================================
 * MAIN-GROUND LIVING NEIGHBOURHOOD (NeighbourhoodBackground.jsx)
 * ============================================================================
 * Crisp, full-color neighbourhood world directly on the main ground (zero veil!).
 * Winding roads, trees, Donor buildings, NGO hubs, and Recipients sit right
 * in the open spaces around and between your cards while delivery riders
 * continuously pick up food from Donors and deliver to Recipients!
 * ============================================================================
 */

const BAND_COUNT = 5;

export default function NeighbourhoodBackground() {
  return (
    <div className={styles.groundCanvas} aria-hidden="true">
      {Array.from({ length: BAND_COUNT }).map((_, idx) => {
        const loopOne = `nbLoopOne_${idx}`;
        const loopTwo = `nbLoopTwo_${idx}`;

        return (
          <svg
            key={idx}
            className={styles.bandSvg}
            viewBox="0 0 1440 920"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Playful Winding Round-Trip Route 1: NGO -> Donor -> NGO -> Recipients -> NGO */}
              <path
                id={loopOne}
                d="M 720 150 C 460 150, 260 150, 140 280 C 70 360, 90 500, 210 540 C 430 610, 980 340, 1240 430 C 1350 470, 1350 640, 1210 720 C 980 830, 520 790, 230 740 C 110 710, 100 560, 210 540 C 420 490, 560 150, 720 150"
              />
              {/* Route 2 (Reverse / Staggered Neighbourhood Delivery Rider) */}
              <path
                id={loopTwo}
                d="M 1210 720 C 980 830, 520 790, 230 740 C 105 710, 85 410, 140 280 C 230 140, 540 150, 720 150 C 950 150, 1240 180, 1310 320 C 1365 430, 1330 630, 1210 720"
              />
              <filter id={`nbShadow_${idx}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#3b2313" floodOpacity="0.18" />
              </filter>
            </defs>

            {/* Warm Illustrated Ground */}
            <rect width="1440" height="920" fill="#F6EFE2" />

            {/* Organic Illustrated Neighbourhood Patches (Terracotta, Sage Green, Warm Sand) */}
            <path d="M 0 0 L 580 0 C 520 120, 340 130, 0 210 Z" fill="#E5987B" opacity="0.55" />
            <path d="M 830 0 L 1440 0 L 1440 250 C 1180 210, 980 120, 830 0 Z" fill="#CFE1C8" opacity="0.78" />
            <ellipse cx="340" cy="360" rx="230" ry="125" fill="#DCE9D5" opacity="0.75" />
            <ellipse cx="1090" cy="290" rx="250" ry="120" fill="#EBD3BC" opacity="0.75" />
            <ellipse cx="730" cy="610" rx="310" ry="135" fill="#E7A58A" opacity="0.46" />
            <ellipse cx="240" cy="820" rx="250" ry="105" fill="#CFE1C8" opacity="0.75" />
            <ellipse cx="1210" cy="830" rx="240" ry="105" fill="#E5987B" opacity="0.5" />

            {/* Winding Neighbourhood Road Base */}
            <g stroke="#2C312E" strokeLinecap="round" strokeLinejoin="round" fill="none">
              <path
                d="M 720 150 C 460 150, 260 150, 140 280 C 70 360, 90 500, 210 540 C 430 610, 980 340, 1240 430 C 1350 470, 1350 640, 1210 720 C 980 830, 520 790, 230 740"
                strokeWidth="42"
              />
              <path
                d="M 720 150 C 950 150, 1240 180, 1310 320 C 1365 430, 1330 630, 1210 720"
                strokeWidth="38"
              />
              <path d="M 720 -20 L 720 150" strokeWidth="36" />
              <path d="M 720 790 L 720 940" strokeWidth="36" />
            </g>

            {/* Cream Dashed Center Road Markings */}
            <g
              stroke="#FAF6EF"
              strokeWidth="2.8"
              strokeDasharray="11 13"
              strokeLinecap="round"
              fill="none"
              opacity="0.92"
            >
              <path d="M 720 150 C 460 150, 260 150, 140 280 C 70 360, 90 500, 210 540 C 430 610, 980 340, 1240 430 C 1350 470, 1350 640, 1210 720 C 980 830, 520 790, 230 740" />
              <path d="M 720 150 C 950 150, 1240 180, 1310 320 C 1365 430, 1330 630, 1210 720" />
              <path d="M 720 -20 L 720 150" />
              <path d="M 720 790 L 720 940" />
            </g>

            {/* Playful Neighbourhood Trees */}
            {[
              [82, 165, '#4A8B5E'],
              [420, 88, '#D99B26'],
              [1035, 92, '#4A8B5E'],
              [1370, 180, '#D99B26'],
              [66, 610, '#4A8B5E'],
              [540, 440, '#5A9A68'],
              [910, 535, '#D99B26'],
              [1382, 545, '#4A8B5E'],
              [470, 855, '#4A8B5E'],
              [985, 865, '#D99B26'],
            ].map(([tx, ty, col], tIdx) => (
              <g key={tIdx} transform={`translate(${tx}, ${ty})`}>
                <rect x="-3" y="8" width="6" height="12" rx="2" fill="#7A5236" />
                <circle cx="0" cy="0" r="15" fill={col} />
                <circle cx="-8" cy="5" r="10" fill={col} />
                <circle cx="8" cy="5" r="10" fill={col} />
              </g>
            ))}

            {/* ==================== GENERAL DONOR / NGO / RECIPIENTS BUILDINGS ==================== */}

            {/* NGO HUB (Top Center-Left Crossing) */}
            <g transform="translate(615, 95)" filter={`url(#nbShadow_${idx})`}>
              <rect x="-38" y="-22" width="76" height="46" rx="8" fill="#FFF5F2" stroke="#D96B43" strokeWidth="2.4" />
              <path d="M -44 -22 L 0 -46 L 44 -22 Z" fill="#D96B43" />
              <rect x="-24" y="-9" width="13" height="13" rx="2.5" fill="#FED7AA" />
              <rect x="11" y="-9" width="13" height="13" rx="2.5" fill="#FED7AA" />
              <rect x="-7" y="4" width="14" height="20" rx="2" fill="#B9512C" />
              <g transform="translate(0, -56)">
                <rect x="-34" y="-11" width="68" height="21" rx="10.5" fill="#D96B43" />
                <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
                  ❤️ NGO
                </text>
              </g>
            </g>

            {/* DONOR BUILDING (Left Curve) */}
            <g transform="translate(92, 415)" filter={`url(#nbShadow_${idx})`}>
              <rect x="-36" y="-22" width="72" height="46" rx="7" fill="#FFFDF7" stroke="#147452" strokeWidth="2.4" />
              <path d="M -42 -22 L 0 -45 L 42 -22 Z" fill="#147452" />
              <rect x="-22" y="-9" width="13" height="13" rx="2.5" fill="#FDE68A" />
              <rect x="9" y="-9" width="13" height="13" rx="2.5" fill="#90CDF4" />
              <rect x="-7" y="5" width="14" height="19" rx="2" fill="#6B4226" />
              <g transform="translate(0, -55)">
                <rect x="-38" y="-11" width="76" height="21" rx="10.5" fill="#147452" />
                <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">
                  🍛 Donor
                </text>
              </g>
            </g>

            {/* RECIPIENTS / PEOPLE IN NEED BUILDING (Right Curve) */}
            <g transform="translate(1345, 385)" filter={`url(#nbShadow_${idx})`}>
              <rect x="-36" y="-22" width="72" height="46" rx="7" fill="#FEFCE8" stroke="#D97706" strokeWidth="2.4" />
              <path d="M -42 -22 L 0 -45 L 42 -22 Z" fill="#D97706" />
              <rect x="-22" y="-9" width="13" height="13" rx="2.5" fill="#FDE68A" />
              <rect x="9" y="-9" width="13" height="13" rx="2.5" fill="#BBF7D0" />
              <rect x="-7" y="5" width="14" height="19" rx="2" fill="#78350F" />
              <g transform="translate(0, -55)">
                <rect x="-48" y="-11" width="96" height="21" rx="10.5" fill="#D97706" />
                <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                  🙌 In Need
                </text>
              </g>
            </g>

            {/* LOWER CROSSING DONOR & NGO */}
            <g transform="translate(335, 705)" filter={`url(#nbShadow_${idx})`}>
              <rect x="-34" y="-20" width="68" height="42" rx="7" fill="#FFFDF7" stroke="#147452" strokeWidth="2.2" />
              <path d="M -40 -20 L 0 -42 L 40 -20 Z" fill="#147452" />
              <rect x="-6" y="4" width="12" height="18" rx="2" fill="#6B4226" />
              <g transform="translate(0, -52)">
                <rect x="-36" y="-11" width="72" height="20" rx="10" fill="#147452" />
                <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                  🍛 Donor
                </text>
              </g>
            </g>

            <g transform="translate(1110, 690)" filter={`url(#nbShadow_${idx})`}>
              <rect x="-34" y="-20" width="68" height="42" rx="7" fill="#FFF5F2" stroke="#D96B43" strokeWidth="2.2" />
              <path d="M -40 -20 L 0 -42 L 40 -20 Z" fill="#D96B43" />
              <rect x="-6" y="4" width="12" height="18" rx="2" fill="#B9512C" />
              <g transform="translate(0, -52)">
                <rect x="-34" y="-11" width="68" height="20" rx="10" fill="#D96B43" />
                <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">
                  ❤️ NGO
                </text>
              </g>
            </g>

            {/* ==================== ANIMATED DELIVERY RIDERS ==================== */}
            {/* Green Delivery Scooter (NGO -> Donor -> People in Need -> Return) */}
            <g filter={`url(#nbShadow_${idx})`}>
              <animateMotion
                dur="18s"
                begin={`-${(idx * 4) % 18}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${loopOne}`} />
              </animateMotion>
              <circle cx="0" cy="0" r="22" fill="#147452" opacity="0.22" />
              <rect
                x="-16"
                y="-10"
                width="32"
                height="20"
                rx="10"
                fill="#147452"
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />
              <rect x="-13" y="-6" width="10" height="12" rx="2.5" fill="#F59E0B" />
              <circle cx="5" cy="0" r="5.5" fill="#FFFDF9" />
              <path d="M 16 -4 L 29 -10 L 29 10 L 16 4 Z" fill="#FDE047" opacity="0.55" />
            </g>

            {/* Terracotta Pickup Rider */}
            <g filter={`url(#nbShadow_${idx})`}>
              <animateMotion
                dur="21s"
                begin={`-${(idx * 6 + 9) % 21}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#${loopTwo}`} />
              </animateMotion>
              <circle cx="0" cy="0" r="20" fill="#D96B43" opacity="0.22" />
              <rect
                x="-15"
                y="-9.5"
                width="30"
                height="19"
                rx="9.5"
                fill="#D96B43"
                stroke="#FFFFFF"
                strokeWidth="2.4"
              />
              <rect x="-12" y="-5.5" width="9.5" height="11" rx="2" fill="#147452" />
              <circle cx="5" cy="0" r="5" fill="#FFFDF9" />
              <path d="M 15 -4 L 27 -9 L 27 9 L 15 4 Z" fill="#FDE047" opacity="0.5" />
            </g>
          </svg>
        );
      })}
    </div>
  );
}
